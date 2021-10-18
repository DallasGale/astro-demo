import React from "react";
import Picture from "../picture";
import { Props } from "./types";

const PostBody: React.VFC<Props> = ({
  image,
  blurUpThumb,
  focalPoint,
  slug,
  category,
  title,
  author,
}) => {
  return (
    <>
      <Picture
        modifierClass="post-tile--picture"
        height="400"
        image={image}
        blurUpThumb={blurUpThumb}
        focalPoint={focalPoint}
        slug={slug}
      />

      <div className="post-tile--copy">
        <small className="post-tile--category">{category}</small>
        <h2 className="post-tile--title">
          <a href={`${slug}`}>{title} </a>
        </h2>
        <p className="post-tile--author">{author}</p>
      </div>
    </>
  );
};

export default PostBody;
