export type Blog = {
  id: string;
  name: string
};

export type Post = {
  id: string;
  title: string;
  blogID: string;
  blog?: Blog;
  comments?;
};

export type Comment = {
  id: string;
  content: string;
  postID: string;
  post?: Post;
};
