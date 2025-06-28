import { PrismaClient, NotificationType, Gender } from '../generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding started...');

  // STEP 1: Create Tags (use upsert to avoid unique errors)
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { name: 'JavaScript' },
      update: {},
      create: { name: 'JavaScript' },
    }),
    prisma.tag.upsert({
      where: { name: 'TypeScript' },
      update: {},
      create: { name: 'TypeScript' },
    }),
    prisma.tag.upsert({
      where: { name: 'React' },
      update: {},
      create: { name: 'React' },
    }),
  ]);

  // STEP 2: Create Users + Profiles
  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      password: 'hashed-password-alice',
      name: 'Alice',
      roles: ['USER'],
      userProfile: {
        create: {
          bio: 'Full-stack dev at Flamelog',
          company: 'Flamelog Inc.',
          location: 'Kolkata',
          gender: Gender.FEMLALE,
          github: 'alicehub',
          interests: ['coding', 'music'],
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      email: 'bob@example.com',
      password: 'hashed-password-bob',
      name: 'Bob',
      roles: ['USER'],
      userProfile: {
        create: {
          bio: 'Frontend engineer',
          location: 'Delhi',
          gender: Gender.MALE,
          twitter: 'bobtweets',
        },
      },
    },
  });

  // STEP 3: Bob follows Alice
  await prisma.follow.upsert({
    where: {
      followerId_followedId: {
        followerId: bob.id,
        followedId: alice.id,
      },
    },
    update: {},
    create: {
      followerId: bob.id,
      followedId: alice.id,
    },
  });

  // STEP 4: Alice creates a post with tags
  const post = await prisma.post.create({
    data: {
      title: 'Intro to React',
      content: 'React is a JS library for building UIs...',
      authorId: alice.id,
      isValid: true,
      rationale: 'Helpful for frontend devs',
      gptMessage: 'Approved by GPT',
      tags: {
        create: tags.slice(0, 2).map((tag) => ({
          tagId: tag.id,
        })),
      },
    },
  });

  // STEP 5: Bob likes, comments, shares Alice’s post
  await prisma.like.create({
    data: {
      postId: post.id,
      userId: bob.id,
    },
  });

  await prisma.comment.create({
    data: {
      postId: post.id,
      authorId: bob.id,
      content: 'Awesome write-up!',
    },
  });

  await prisma.share.create({
    data: {
      postId: post.id,
      userId: bob.id,
    },
  });

  // STEP 6: Feed entry for Bob
  await prisma.feed.create({
    data: {
      postId: post.id,
      userId: bob.id,
      rank: 0.95,
    },
  });

  // STEP 7: Track Bob's feed view
  await prisma.feedTrack.upsert({
    where: { userId: bob.id },
    update: {
      lastSeen: new Date(),
    },
    create: {
      userId: bob.id,
      lastSeen: new Date(),
    },
  });

  // STEP 8: Alice's heatmap
  await prisma.userHeatmap.upsert({
    where: {
      userId_date: {
        userId: alice.id,
        date: new Date(new Date().toDateString()),
      },
    },
    update: {
      count: { increment: 1 },
    },
    create: {
      userId: alice.id,
      date: new Date(new Date().toDateString()),
      count: 1,
    },
  });

  // STEP 9: Alice’s tag stats
  await prisma.userTagStats.upsert({
    where: {
      userId_tagId: {
        userId: alice.id,
        tagId: tags[0].id,
      },
    },
    update: {
      postCount: { increment: 1 },
    },
    create: {
      userId: alice.id,
      tagId: tags[0].id,
      postCount: 1,
    },
  });

  // STEP 10: Bob follows tag
  await prisma.tagFollow.upsert({
    where: {
      tagId_userId: {
        tagId: tags[0].id,
        userId: bob.id,
      },
    },
    update: {},
    create: {
      tagId: tags[0].id,
      userId: bob.id,
    },
  });

  // STEP 11: Notification
  await prisma.notification.create({
    data: {
      recipientId: alice.id,
      senderId: bob.id,
      type: NotificationType.LIKE,
      message: 'Bob liked your post.',
      link: `/post/${post.id}`,
    },
  });

  console.log('✅ Seed complete');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed: ', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
