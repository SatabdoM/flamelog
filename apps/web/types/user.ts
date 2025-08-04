export type User = {
  id: number;
  username: string;
  email: string;
  name: string | null;
  image?: string | null;
  roles: string[];
};
