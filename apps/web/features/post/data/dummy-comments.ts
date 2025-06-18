import { TComment } from '@/types/comment';
import { User } from '@/types/user';

const dummyUsers: User[] = [
  {
    id: 1,
    email: 'john.doe@example.com',
    name: 'John Doe',
    image:
      'https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['ADMIN'],
  },
  {
    id: 2,
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['MODERATOR'],
  },
  {
    id: 3,
    email: 'mike.johnson@example.com',
    name: 'Mike Johnson',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['USER'],
  },
  {
    id: 4,
    email: 'sarah.williams@example.com',
    name: 'Sarah Williams',
    image:
      'https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['USER'],
  },
  {
    id: 5,
    email: 'david.brown@example.com',
    name: 'David Brown',
    image:
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['MODERATOR', 'USER'],
  },
  {
    id: 6,
    email: 'emily.davis@example.com',
    name: 'Emily Davis',
    image:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['ADMIN', 'MODERATOR'],
  },
  {
    id: 7,
    email: 'robert.wilson@example.com',
    name: 'Robert Wilson',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['USER'],
  },
  {
    id: 8,
    email: 'lisa.moore@example.com',
    name: 'Lisa Moore',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    roles: ['USER'],
  },
];

// List of possible comment messages
const commentMessages = [
  'Great post! Really enjoyed reading this.',
  'Interesting perspective, I never thought about it that way.',
  'Thanks for sharing this valuable information!',
  'I completely agree with your points here.',
  'Could you elaborate more on the second point?',
  'This is so helpful for my current project, thank you!',
  "I've had a similar experience and can relate to this.",
  'Well written and concise. Love it!',
  'What are your thoughts on the recent developments in this field?',
  'This reminds me of something I read last week.',
  'Would love to see more content like this!',
  'Not sure I agree with everything, but appreciate the effort.',
  'This is exactly what I needed today!',
  'The examples really helped me understand the concept better.',
  'Looking forward to your next post on this topic.',
  'How does this compare to the traditional approach?',
  'Mind blown! 🤯',
  'Simple yet effective explanation.',
  "I shared this with my team - we're all impressed!",
  'Can you recommend any additional resources on this topic?',
];

// Function to generate random date within the last year
function getRandomDate(): Date {
  const now = new Date();
  const past = new Date();
  past.setFullYear(now.getFullYear() - 1);
  return new Date(past.getTime() + Math.random() * (now.getTime() - past.getTime()));
}

// Function to get random comments for a post
export function getRandomComments(): TComment[] {
  const commentCount = Math.floor(Math.random() * 11); // Random number 0-10
  const comments: TComment[] = [];

  for (let i = 0; i < commentCount; i++) {
    const randomUserIndex = Math.floor(Math.random() * dummyUsers.length);
    const randomMessageIndex = Math.floor(Math.random() * commentMessages.length);

    comments.push({
      id: i,
      author: dummyUsers[randomUserIndex] ?? dummyUsers[0]!,
      createdAt: getRandomDate(),
      message: commentMessages[randomMessageIndex] ?? commentMessages[0]!,
    });
  }

  return comments;
}
