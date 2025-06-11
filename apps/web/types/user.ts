export type User = {
  id: number;
  email: string;
  name: string | null;
  image?: string | null;
  roles: string[];
};
