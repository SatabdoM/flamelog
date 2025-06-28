import { Request, Response } from 'express';
import { AuthentictedRequest } from '../../types/auth';
import { getUserFeedHandler } from './feed.service';

export const getUserFeed = async (req: AuthentictedRequest, res: Response) => {
  const userId = req.user.id;
  console.log('Fetching feed for user:', userId);

  try {
    const feed = await getUserFeedHandler(userId);
    res.status(200).json(feed);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
