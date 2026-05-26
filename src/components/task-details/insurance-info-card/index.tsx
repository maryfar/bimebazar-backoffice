import SectionCard from "@/components/shared/section-card";

function InsuranceInfoCard() {
  return (
    <SectionCard title="تخفیف بیمه‌نامه قبلی">
      <div className="grid grid-cols-2 gap-10 text-sm">
        <div className="space-y-6">
          <InfoRow
            label="تغییر مالکیت داشته است؟"
            value="تغییر مالکیت داشته است"
          />

          <InfoRow label="انتقال تخفیفات دارد؟" value="دارد" />

          <InfoRow label="شماره پلاک" value="۵۵۵ الف ۵۵ ایران ۵۵" />
        </div>

        <div className="space-y-6 border-x border-gray-200 px-10">
          <InfoRow label="کد ملی مالک پلاک انتقالی" value="۴۵۳۰۰۷۶۵۸۹" />

          <InfoRow label="تخفیف ثالث بیمه‌نامه قبلی" value="۵۰ درصد" />

          <InfoRow label="تخفیف حوادث راننده بیمه‌نامه قبلی" value="۵۰ درصد" />
        </div>
      </div>
    </SectionCard>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-gray-500">{label}</span>

      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}

export default InsuranceInfoCard;
