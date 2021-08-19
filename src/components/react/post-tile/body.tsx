import React from "react";
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
  const Picture = (height) => (
    <picture
      className="post-tile--picture"
      style={{ backgroundImage: `url(${blurUpThumb})` }}
    >
      <source srcSet={`${image}?auto=format&h=${height}`} />
      <a href={`/post/${slug}`}>
        <img
          src={`${image}?auto=format&h=${height}&crop=focalpoint&fp-x=${focalPoint.x}&fp-y=${focalPoint.y}`}
          alt="Buzz"
        />
      </a>
    </picture>
  );

  return (
    <>
      {tileType === "feature" && <Picture height="900" />}
      {tileType === "default" && <Picture height="400" />}
      {tileType === "strip" && <Picture height="300" />}
      {tileType === "mini" && <Picture height="100" />}
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
