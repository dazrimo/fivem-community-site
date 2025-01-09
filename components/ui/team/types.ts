export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    discord?: string;
    twitter?: string;
    github?: string;
  };
}