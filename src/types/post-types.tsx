interface Comment {
  id: number;
  authorName: string;
  avatarUrl: string;
  text: string;
}

export interface PostProps {
  id: number;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
  postText: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  comments: Comment[];
}
