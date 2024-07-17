import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Lang from "@/app/_components/icons/Lang";

const LangSelector = () => {
  return (
    <Select value="English" defaultValue="English">
      <SelectTrigger className="text-white justify-start border-home-select rounded p-2 gap-3 h-full font-NetflixSansSemiBold min-h-[10px]">
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