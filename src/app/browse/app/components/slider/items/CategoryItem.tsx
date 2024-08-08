import Image from "next/image"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { FC } from "react"
import SliderItemContent from "./SliderItemContent"

const CategoryItem: FC<{ position: number }> = ({ position }) => {
  return (
    <HoverCard openDelay={500}>
      <HoverCardTrigger className="inline-block w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 1.5lg:w-1/6 h-full px-1">
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
