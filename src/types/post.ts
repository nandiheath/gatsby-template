export type PostExcerpt = {
  excerpt: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    tags: string[];
    categories: string[];
  };
};
