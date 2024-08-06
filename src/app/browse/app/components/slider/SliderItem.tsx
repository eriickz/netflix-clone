import { FC } from "react";
import RankingItem from "./items/RankingItem";
import CategoryItem from "./items/CategoryItem";
import { SliderItemProps } from "../../libs/interfaces";

const SliderItem: FC<SliderItemProps> = ({ position, type }) => {
  return (
    <>
      {type === "ranking"
        ? <RankingItem position={position} />
        : <CategoryItem position={position} />
      }
    </>
  )
}

export default SliderItem
