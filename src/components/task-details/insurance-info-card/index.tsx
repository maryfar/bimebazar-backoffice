import InfoRow from "@/components/shared/info-row";
import SectionCard from "@/components/shared/section-card";
import type { InsuranceInfo } from "@/types/task-detail.types";
import CarPlate from "../car-plate";

interface Props {
  data: InsuranceInfo;
}

function InsuranceInfoCard({ data }: Props) {
  return (
    <SectionCard title="تخفیف بیمه‌نامه قبلی">
      <div className="grid grid-cols-2 gap-10 text-sm">
        <div className="space-y-4">
          <InfoRow
            label="تغییر مالکیت داشته است؟
            (تعویض پلاک)"
            value={data?.ownershipChanged ? "تغییر مالکیت داشته است" : "ندارد"}
          />
          <InfoRow
            label="انتقال تخفیفات دارد؟"
            value={data?.hasDiscountTransfer ? "دارد" : "ندارد"}
          />
          <div className="flex items-center justify-between ">
            <span className="text-gray-500 text-xs font-normal  leading-5">
              شماره پلاک
            </span>

            <CarPlate plate={data.plateNumber} />
          </div>{" "}
        </div>

        <div className="space-y-6 border-r border-gray-200 px-8">
          <InfoRow label="کد ملی مالک پلاک انتقالی" value={data?.nationalId} />

          <InfoRow
            label="تخفیف ثالث بیمه‌نامه قبلی"
            value={`${data?.previousThirdPartyDiscount} درصد`}
          />

          <InfoRow
            label="تخفیف حوادث راننده بیمه‌نامه قبلی"
            value={`${data?.driverAccidentDiscount} درصد`}
          />
        </div>
      </div>
    </SectionCard>
  );
}

export default InsuranceInfoCard;
