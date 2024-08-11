import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Lang from "./icons/Lang";
import { FC } from "react";

const LangSelector: FC<{ hideText?: boolean }> = ({ hideText = true }) => {
  return (
    <Select value="English" defaultValue="English">
      <SelectTrigger className={`text-white font-NetflixSansRegular justify-start border-home-select rounded p-2 gap-3 h-full min-h-[10px] bg-home-input ${hideText ? "[&>span]:hidden sm:[&>span]:block" : "[&>span]:block"}`}>
        <Lang/>
        <SelectValue/>
      </SelectTrigger>
      <SelectContent className="bg-white border-none font-normal min-h-[10px] min-w-[1px] rounded-lg p-0">
        <SelectItem value="Spanish" className="font-NetflixSansRegular p-0 justify-center text-base rounded-none hover:bg-blue-600 hover:text-white">
          Español
        </SelectItem>
        <SelectItem value="English" className="font-NetflixSansRegular p-0 justify-center text-base rounded-none hover:bg-blue-600 hover:text-white">
          English
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LangSelector
