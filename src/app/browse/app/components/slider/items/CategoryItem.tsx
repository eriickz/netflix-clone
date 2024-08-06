import Image from "next/image"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { FC } from "react"
import SliderItemContent from "./SliderItemContent"

const CategoryItem: FC<{ position: number }> = ({ position }) => {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger className="inline-block w-auto h-[217px] px-1">
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
