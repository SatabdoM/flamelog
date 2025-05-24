import { Post } from '@/types/post';
import { User } from '@/types/user';
import { dummyUsers } from '../user/dummy-users';

export function generateDummyPosts(count: number = 20): Post[] {
  const loremIpsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    'Et harum quidem rerum facilis est et expedita distinctio.',
  ];

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

  const posts: Post[] = [];
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day

  for (let i = 0; i < count; i++) {
    const randomUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)] as User;
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
