import React from "react";
import { Props } from "./types";

const PostBody: React.VFC<Props> = ({
  image,
  slug,
  category,
  title,
  excerpt,
  author,
  tileType,
}) => {
  return (
    <>
      <picture className="post-tile--picture">
        <source srcSet={`${image}?auto=format&h=400`} />
        <a href={`/post/${slug}`}>
          <img src={`${image}?auto=format&h=400`} alt="Buzz" />
        </a>
      </picture>
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
