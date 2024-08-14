import { FC } from "react";
import RankingItem from "./items/RankingItem";
import CategoryItem from "./items/CategoryItem";
import { SliderItemProps } from "../../libs/interfaces";

const SliderItem: FC<SliderItemProps> = ({ position, type, content, genres }) => {
  return (
    <>
      {
        type === "ranking"
        ? <RankingItem position={position} content={content} genres={genres} />
        : <CategoryItem position={position} content={content} genres={genres} />
      }
    </>
  )
}

export default SliderItem
