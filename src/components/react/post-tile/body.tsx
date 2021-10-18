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
  excerpt,
  author,
  tileType,
}) => {
  return (
    <>
      {tileType === "feature" && (
        <Picture
          modifierClass="post-tile--picture"
          height="900"
          image={image}
          blurUpThumb={blurUpThumb}
          focalPoint={focalPoint}
          slug={`/post/${slug}`}
        />
      )}
      {tileType === "default" && (
        <Picture
          modifierClass="post-tile--picture"
          height="400"
          image={image}
          blurUpThumb={blurUpThumb}
          focalPoint={focalPoint}
          slug={`/post/${slug}`}
        />
      )}
      {tileType === "strip" && (
        <Picture
          modifierClass="post-tile--picture"
          height="300"
          image={image}
          blurUpThumb={blurUpThumb}
          focalPoint={focalPoint}
          slug={`/post/${slug}`}
        />
      )}
      {tileType === "mini" && (
        <Picture
          modifierClass="post-tile--picture"
          height="100"
          image={image}
          blurUpThumb={blurUpThumb}
          focalPoint={focalPoint}
          slug={`/post/${slug}`}
        />
      )}
      <div className="post-tile--copy">
        <small className="post-tile--category">{category}</small>
        <h2 className="post-tile--title">
          <a href={`/post/${slug}`}>{title} </a>
        </h2>
        {tileType !== "mini" && (
          <p className="post-tile--excerpt">
            <a href={`/post/${slug}`}>{excerpt}</a>
          </p>
        )}
        <p className="post-tile--author">{author}</p>
      </div>
    </>
  );
};

export default PostBody;
