import type { CarPlate as CarPlateType } from "@/types/task-detail.types";
import Element from "@/assets/images/Element.svg";
interface Props {
  plate: CarPlateType;
}

function CarPlate({ plate }: Props) {
  return (
    <div
      className="
        inline-flex overflow-hidden rounded-xl
        border border-gray-300 bg-white
      "
    >
      <div
        className="
          flex items-center 
           text-lg font-bold
        "
      >
        <div className="flex flex-col items-center border-l border-gray-300 p-2 gap-1 ">
          <span className="text-[7.33px] font-normal">ایران</span>
          <span className="text-xs font-normal rounded-md bg-gray-100 flex items-center p-1">
            {plate.cityCode}
          </span>
        </div>
        <div className="flex  items-center p-2 gap-2">
          <span className="text-xs font-normal rounded-md bg-gray-100 flex items-center p-1">
            {plate.firstPart}
          </span>

          <span className="text-xs font-normal rounded-md bg-gray-100 flex items-center p-1">
            {plate.letter}
          </span>

          <span className="text-xs font-normal rounded-md bg-gray-100 flex items-center p-1">
            {plate.secondPart}
          </span>
        </div>
      </div>
      <div
        className="
          flex  w-6 flex-col items-center gap-2
          justify-center bg-gray-100
        "
      >
        <img src={Element} alt="iran" />

        <span className=" text-[7px] text-gray-400 w-3 wrap-normal ">
          I.R. IRAN
        </span>
      </div>
    </div>
  );
}

export default CarPlate;
