import React from "react";

interface Props {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  tileType: "feature" | "mini" | "strip";
  isFeature: boolean;
  isMini: boolean;
}

const PostTile = ({
  slug,
  image,
  category,
  title,
  excerpt,
  author,
  tileType,
}): Props => {
  if (tileType === "feature") {
    return (
      <a href={`/post/${slug}`} className="post-tile post-tile--feature">
        <picture className="post-tile--picture">
          <source srcSet={`${image}?auto=format&h=700`} />
          <img src={`${image}?auto=format&h=600`} alt="Buzz" />
        </picture>

        <div className="post-tile--copy">
          <small className="post-tile--category">{category}</small>
          <h2 className="post-tile--title">{title}</h2>
          <p className="post-tile--excerpt">{excerpt}</p>
          <p className="post-tile--author">{author}</p>
        </div>
      </a>
    );
  } else if (tileType === "mini") {
    return (
      <a href={`/post/${slug}`} className="post-tile post-tile--mini">
        <picture className="post-tile--picture">
          <source srcSet={`${image}?auto=format&h=100`} />
          <img src={`${image}?auto=format&h=100`} alt="Buzz" />
        </picture>

        <div className="post-tile--copy">
          <small className="post-tile--category">{category}</small>
          <h2 className="post-tile--title">{title}</h2>
        </div>
      </a>
    );
  } else if (tileType === "strip") {
    return (
      <a href={`/post/${slug}`} className="post-tile post-tile--strip">
        <picture className="post-tile--picture">
          <source srcSet={`${image}?auto=format&h=150`} />
          <img src={`${image}?auto=format&h=150`} alt="Buzz" />
        </picture>

        <div className="post-tile--copy">
          <small className="post-tile--category">{category}</small>
          <h2 className="post-tile--title">{title}</h2>
          <p className="post-tile--excerpt">{excerpt}</p>
          <p className="post-tile--author">{author}</p>
        </div>
      </a>
    );
  } else {
    return (
      <a href={`/post/${slug}`} className="post-tile post-tile--regular">
        <picture className="post-tile--picture">
          <source srcSet={`${image}?auto=format&h=400`} />
          <img src={`${image}?auto=format&h=400`} alt="Buzz" />
        </picture>

        <div className="post-tile--copy">
          <small className="post-tile--category">{category}</small>
          <h2 className="post-tile--title">{title}</h2>
          <p className="post-tile--excerpt">{excerpt}</p>
          <p className="post-tile--author">{author}</p>
        </div>
      </a>
    );
  }
};

export default PostTile;
