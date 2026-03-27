export type PostStatus = 'borrador' | 'publicada' | 'programada';

export interface Post {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  content: string; // HTML/Rich Text
  category: string;
  tags: string[];
  image_urls: string[];
  status: PostStatus;
}
