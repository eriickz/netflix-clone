import { FC } from "react";
import RankingItem from "./items/RankingItem";
import CategoryItem from "./items/CategoryItem";
import { SliderItemProps } from "../../libs/interfaces";

const SliderItem: FC<SliderItemProps> = ({ position, type, content }) => {
  return (
    <>
      {
        type === "ranking"
        ? <RankingItem position={position} content={content} />
        : <CategoryItem position={position} content={content} />
      }
    </>
  )
}

export default SliderItem
