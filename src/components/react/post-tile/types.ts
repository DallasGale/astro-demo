export interface Props {
  author: string;
  slug: string;
  image: string;
  focalPoint: {
    x: string;
    y: string;
  };
  blurUpThumb: string;
  category: string;
  title: string;
  excerpt: string;
  tileType: "feature" | "mini" | "strip" | "default";
}
