import Image from "next/image"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { FC } from "react"
import SliderItemContent from "./SliderItemContent"

const CategoryItem: FC<{ position: number }> = ({ position }) => {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger className="inline-block lg:w-1/5 h-full px-1">
        <Image 
          alt="rank-slide-one" 
          src="/images/modal-img-category.jpg" 
          width={0} 
          height={0} 
          sizes="100vh" 
          className="w-full h-full inline-block rounded" 
        />
      </HoverCardTrigger>
      <SliderItemContent position={position} />
    </HoverCard>
  )
}

export default CategoryItem
