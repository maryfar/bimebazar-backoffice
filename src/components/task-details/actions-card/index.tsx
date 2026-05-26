import SectionCard from "@/components/shared/section-card";

function ActionsCard() {
  return (
    <SectionCard title="اقدامات">
      <div className="space-y-4">
        <select className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none">
          <option>خیر</option>
        </select>

        <select className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none">
          <option>انتخاب کنید</option>
        </select>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">پیش‌فرض خسارت دریافت شده است</p>
        </div>

        <button className="mt-6 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
          ثبت نهایی
        </button>
      </div>
    </SectionCard>
  );
}

export default ActionsCard;
