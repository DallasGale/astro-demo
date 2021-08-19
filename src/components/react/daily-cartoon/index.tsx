import React from "react";
import TextStrip from "../text-strip";

interface Props {
  cartoon: {
    src: string;
    alt: string;
    caption: string;
  };
}
const DailyCartoon: React.FC<Props> = ({ cartoon }) => {
  return (
    <div className="daily-cartoon">
      <TextStrip text="Daily Cartoon" justifyContent="flex-start" />
      <div className="daily-cartoon__image">
        <img src={cartoon.src} alt={cartoon.alt} />
      </div>
      <blockquote>
        <em>{`"${cartoon.caption}"`}</em>
      </blockquote>
    </div>
  );
};

export default DailyCartoon;
