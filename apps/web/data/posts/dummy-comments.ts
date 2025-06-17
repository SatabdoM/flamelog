import { TComment } from '@/types/comment';
import { dummyUsers } from '../user/dummy-users';

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
