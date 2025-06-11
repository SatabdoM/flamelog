import { User } from '@/types/user';

export const dummyUsers: User[] = [
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
