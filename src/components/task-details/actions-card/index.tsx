function ActionsCard() {
  return (
    <div className="w-96 rounded-xl  bg-white p-5 shadow-sm">
      <h1 className="mb-4 font-bold text-[16px]">اقدامات</h1>

      <form className="space-y-3">
        <select className=" w-full rounded-lg border border-gray-400 bg-white p-2 text-xs outline-none">
          <option>خیر</option>
        </select>

        <select className=" w-full rounded-lg border border-gray-400 bg-white p-2 text-xs text-[#616161] outline-none">
          <option className="text-xs text-[#616161]">انتخاب کنید</option>
        </select>

        <div>
          <p className="text-xs text-[#616161]">
            پیش‌فرض: خسارت دریافت شده است
          </p>
        </div>

        <div className="flex items-end justify-end border-t border-gray-300 pt-3">
          <button
            type="submit"
            className=" rounded-xl shadow-gray-200 bg-gray-700 p-2 text-[11px] cursor-pointer font-semibold text-white px-4 shadow-2xl"
          >
            ثبت نهایی
          </button>
        </div>
      </form>
    </div>
  );
}

export default ActionsCard;
