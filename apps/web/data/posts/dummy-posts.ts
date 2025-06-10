import { TPost } from '@/types/post';
import { User } from '@/types/user';
import { dummyUsers } from '../user/dummy-users';

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]; // ! asserts non-null
  }
  return shuffled;
}

export function generateDummyPosts(count: number = 20): TPost[] {
  const loremIpsum = [
    // Ultra short fragments
    'Lorem ipsum.',
    'Dolor sit.',
    'Consectetur.',

    // Medium length
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',

    // Very long descriptive texts
    'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',

    // Short complete sentences
    'Ut enim ad minim veniam.',
    'Quis nostrud exercitation ullamco.',
    'Excepteur sint occaecat cupidatat.',

    // Extremely long descriptive paragraph
    'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',

    // Medium with line breaks
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation.`,

    // Single word
    'Adipiscing',
    'Voluptatem',

    // Long philosophical
    'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault.',
  ];

  shuffleArray(loremIpsum);

  const postTitles = [
    'Getting Started with React',
    'Advanced TypeScript Patterns',
    'The Future of Web Development',
    'State Management in 2023',
    'CSS Tricks You Should Know',
    'Building Scalable APIs',
    'Microservices Architecture',
    'DevOps Best Practices',
    'Machine Learning Fundamentals',
    'Blockchain Technology Explained',
    'Cybersecurity Essentials',
    'Mobile App Development Trends',
    'The Art of Code Review',
    'Writing Clean JavaScript',
    'Functional Programming Concepts',
    'Database Optimization Techniques',
    'Cloud Computing Solutions',
    'UI/UX Design Principles',
    'Testing Strategies for Web Apps',
    'Career Growth in Tech',
  ];

  const posts: TPost[] = [];
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day

  for (let i = 0; i < count; i++) {
    const randomUser = dummyUsers[i % dummyUsers.length] as User;
    const randomDaysAgo = Math.floor(Math.random() * 30); // Random day in last 30 days
    const randomHoursAgo = Math.floor(Math.random() * 24); // Random hour in day
    const randomMinutesAgo = Math.floor(Math.random() * 60); // Random minute in hour

    posts.push({
      id: i + 1,
      title: postTitles[i % postTitles.length] as string,
      content:
        loremIpsum[i % loremIpsum.length] +
        ' ' +
        loremIpsum[(i + 1) % loremIpsum.length] +
        ' ' +
        loremIpsum[(i + 2) % loremIpsum.length],
      createdAt: new Date(
        now.getTime() -
          randomDaysAgo * oneDay -
          randomHoursAgo * 60 * 60 * 1000 -
          randomMinutesAgo * 60 * 1000
      ),
      author: randomUser,
      authorId: randomUser.id,
      likeCount: Math.floor(Math.random() * 100),
      commentCount: Math.floor(Math.random() * 50),
    });
  }

  return posts;
}
