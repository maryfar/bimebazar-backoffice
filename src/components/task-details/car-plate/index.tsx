import type { CarPlate as CarPlateType } from "@/types/task-detail.types";
import Element from "@/assets/images/Element.svg";
interface Props {
  plate: CarPlateType;
}

function CarPlate({ plate }: Props) {
  return (
    <div className="inline-flex overflow-hidden w-52 rounded-xl border border-gray-300 bg-white">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center border-l border-gray-300 px-2 py-1 gap-1 ">
          <span className="text-[7.33px] font-normal">ایران</span>
          <span className="text-xs font-normal rounded-sm bg-gray-100 flex items-center px-2 py-1">
            {plate?.cityCode}
          </span>
        </div>
        <div className="flex  items-center justify-between w-full px-2 gap-2">
          <span className="text-xs font-normal rounded-sm bg-gray-100 flex items-center px-2 py-1">
            {plate?.firstPart}
          </span>

          <span className="text-xs font-normal rounded-sm bg-gray-100 flex items-center px-2 py-1">
            {plate?.letter}
          </span>

          <span className="text-xs font-normal rounded-sm bg-gray-100 flex items-center px-2 py-1">
            {plate?.secondPart}
          </span>
        </div>
        <div className="flex  flex-col items-center justify-center gap-1 px-2 py-1 bg-gray-100 rounded-md">
          <img src={Element} alt="iran" />
          <span className=" text-[7px] text-gray-400 ">I.R. IRAN</span>
        </div>
      </div>
    </div>
  );
}

export default CarPlate;
