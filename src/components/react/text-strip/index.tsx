import React from "react";

const TextStrip: React.FC = ({ children }) => {
  return (
    <div class="support-strip">
      <h2>{children}</h2>
    </div>
  );
};

export default TextStrip;
