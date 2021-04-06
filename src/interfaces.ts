interface CommentProperties {
  id: number;
  author: string;
  upvotes: number;
  date: string;
  text: string;
}
export interface PostProperties {
  id: number;
  subamindId: number;
  subaminName: string;
  subaminLogo: string;
  title: string;
  description: string;
  author: string;
  upvotes: number;
  date: string;
  comments?: CommentProperties[];
  image?: string;
}
export interface Subamin {
  id: number;
  name: string;
  members: number;
  logo: string;
  desc: string;
}