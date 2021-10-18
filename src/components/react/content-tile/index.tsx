import React from "react";
import Body from "./body";
import { Props } from "./types";

const ContentTile: React.VFC<Props> = ({
  slug,
  image,
  focalPoint,
  blurUpThumb,
  category,
  title,
  excerpt,
  author,
}) => {
  return (
    <div className="post-tile post-tile--regular">
      <Body
        slug={slug}
        image={image}
        focalPoint={focalPoint}
        blurUpThumb={blurUpThumb}
        category={category}
        title={title}
        excerpt={excerpt}
        author={author}
      />
    </div>
  );
};

export default ContentTile;
