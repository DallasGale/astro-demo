import React from "react";

interface Props {
  height: string;
  blurUpThumb: string;
  image: string;
  slug: string;
  focalPoint: {
    x: string;
    y: string;
  };
  modifierClass?: string;
}
const Picture: React.VFC<Props> = ({
  height,
  blurUpThumb,
  image,
  slug,
  focalPoint,
  modifierClass,
}) => (
  <>
    <picture
      className={`picture ${modifierClass ? modifierClass : ""}`}
      style={{ backgroundImage: `url(${blurUpThumb})` }}
    >
      <source srcSet={`${image}?auto=format&h=${height}`} />
      <a href={slug}>
        <img
          src={`${image}?auto=format&h=${height}&crop=focalpoint&fp-x=${focalPoint.x}&fp-y=${focalPoint.y}`}
          alt="Buzz"
        />
      </a>
    </picture>
  </>
);

export default Picture;
