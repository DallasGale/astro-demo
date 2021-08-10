import React from "react";

const PostTile = ({ title, excerpt }) => {
  return (
    <div className="post-tile">
      {title}
      {excerpt}
    </div>
  );
};

export default PostTile;
