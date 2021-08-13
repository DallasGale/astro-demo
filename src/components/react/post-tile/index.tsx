import React from "react";

interface Props {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  tileType: "feature" | "mini" | "strip";
  isFeature: boolean;
  isMini: boolean;
}

const PostTile = ({
  image,
  category,
  title,
  excerpt,
  author,
  tileType,
}): Props => {
  if (tileType === "feature") {
    return (
      <div className="post-tile post-tile--feature">
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
      </div>
    );
  } else if (tileType === "mini") {
    return (
      <div className="post-tile post-tile--mini">
        <picture className="post-tile--picture">
          <source srcSet={`${image}?auto=format&h=100`} />
          <img src={`${image}?auto=format&h=100`} alt="Buzz" />
        </picture>

        <div className="post-tile--copy">
          <small className="post-tile--category">{category}</small>
          <h2 className="post-tile--title">{title}</h2>
        </div>
      </div>
    );
  } else if (tileType === "strip") {
    return (
      <div className="post-tile post-tile--strip">
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
      </div>
    );
  } else {
    return (
      <div className="post-tile post-tile--regular">
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
      </div>
    );
  }
};

export default PostTile;
