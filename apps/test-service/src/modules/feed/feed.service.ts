import { prisma } from '@workspace/db';
import { AuthentictedRequest } from '../../types/auth';
import { PostSchema, PostWithAllRelations } from '../post/post.schema';
import dayjs from 'dayjs';

//hard coded for now, will be replaced with actual logic later
const computeAffinity = (userId: Number, authorId: Number) => 1;
const computePostScore = (
  createdAt: Date,
  likeCount: number,
  commentCount: number,
  shares: number,
  affinity: number
) => {
  const engagement = likeCount + 2 * commentCount + 3 * shares;
  const hoursAgo = dayjs().diff(createdAt, 'hour');
  const decay = hoursAgo / 12; // posts decay with time

  return Math.log10(1 + engagement) + affinity - decay;
};
export async function fanOutPostToFollowers(post: PostWithAllRelations) {
  console.log('😌Fan out post to followers: ', post);
  const authorId = post.authorId;
  const postId = post.id;
  const tags = post.tags.map((tag) => tag.tag.name);

  console.log('authorId, postId, tags ', authorId, postId, tags);

  //fetch followers of the user who created the post
  const authorFollowers = await prisma.follow.findMany({
    where: { followedId: authorId },
    select: { followerId: true },
  });
  const postTags = await prisma.postTag.findMany({
    where: { postId: postId },
    select: { tagId: true },
  });
  const tagFollowers = await prisma.tagFollow.findMany({
    where: { tagId: { in: postTags.map((tag) => tag.tagId) } },
    select: { userId: true },
  });

  console.log('authorFollowers, postTags, TagFollowers ', authorFollowers, postTags, tagFollowers);

  const allUserIds = new Set<number>();
  authorFollowers?.forEach((follower) => {
    allUserIds.add(follower.followerId);
  });
  tagFollowers?.forEach((tagFollower) => {
    allUserIds.add(tagFollower.userId);
  });
  const userIdsToSendPost = Array.from(allUserIds);
  console.log('userIdsToSendPost: ', userIdsToSendPost.length); // Debugging line to check the number of users

  //Post engagement metrics
  const InsertToFeed = userIdsToSendPost.map((userId) => {
    console.log('Debug here');

    const affinity = computeAffinity(userId, authorId);
    console.log('userId, authorId, affinity ', userId, authorId, affinity);
    const postScore = computePostScore(
      post.createdAt,
      post.likeCount,
      post.commentCount,
      post.shares?.length || 0,
      affinity
    );

    return prisma.feed.upsert({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
      update: {
        rank: postScore,
      },
      create: {
        userId: userId,
        postId: postId,
        createdAt: new Date(),
        rank: postScore,
      },
    });
  });

  await prisma.$transaction(InsertToFeed);
}
export async function getUserFeedHandler(userId: number) {
  try {
    // Fetch the user's feed
    const feed = await prisma.feed.findMany({
      where: { userId },
      orderBy: { rank: 'desc' },
      take: 30,
      include: {
        post: {
          select: {
            title: true,
            content: true,
            author: {
              select: {
                name: true,
              },
            },
            tags: {
              select: {
                tag: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            comments: {
              select: {
                content: true,
                createdAt: true,
                author: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            likes: {
              select: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            shares: {
              select: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const formattedFeed = feed.map((entry) => {
      const post = entry?.post;
      return {
        title: post?.title,
        content: post?.content,
        author: post?.author.name,
        tags: post?.tags.map((tagEntry) => tagEntry.tag.name),
        comments: post?.comments.map((comment) => ({
          content: comment.content,
          createdAt: comment.createdAt,
          author: comment.author.name,
        })),
        likes: post?.likes.map((like) => like.user.name),
        shares: post?.shares.map((share) => share.user.name),
        rank: entry?.rank,
        createdAt: entry?.createdAt,
      };
    });
    //console.log('Feed fetched successfully:', formattedFeed);
    return formattedFeed;
  } catch (error) {
    console.error('Error fetching user feed:', error);
    throw new Error('Failed to fetch user feed');
  }
}
