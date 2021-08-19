import React from "react";
import PostBody from "./body";
import { Props } from "./types";

const PostTile: React.VFC<Props> = ({
  slug,
  image,
  category,
  title,
  excerpt,
  author,
  tileType,
}) => {
  if (tileType === "feature") {
    return (
      <div className="post-tile post-tile--feature">
        <PostBody
          slug={slug}
          image={image}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="feature"
        />
      </div>
    );
  } else if (tileType === "mini") {
    return (
      <div className="post-tile post-tile--mini">
        <PostBody
          slug={slug}
          image={image}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="mini"
        />
      </div>
    );
  } else if (tileType === "strip") {
    return (
      <div className="post-tile post-tile--strip">
        <PostBody
          slug={slug}
          image={image}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="strip"
        />
      </div>
    );
  } else {
    return (
      <div className="post-tile post-tile--regular">
        <PostBody
          slug={slug}
          image={image}
          category={category}
          title={title}
          excerpt={excerpt}
          author={author}
          tileType="default"
        />
      </div>
    );
  }
};

export default PostTile;
