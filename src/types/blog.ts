export interface BlogPost {
  title: string;
  brief: string;
  dateAdded: string;
  coverImage: string;
  slug: string;
  readTime: number;
}

export interface HashnodeResponse {
  data: {
    user: {
      publication: {
        posts: BlogPost[];
      };
    };
  };
}