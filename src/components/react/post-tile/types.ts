export interface Props {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  tileType: "feature" | "mini" | "strip" | "default";
}
