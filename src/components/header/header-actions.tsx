import { useAuthStore } from "@/store/auth.store";
import Icon from "@/assets/images/Icon.svg";
function HeaderActions() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="relative flex gap-3 group">
      <div className="rounded-xl bg-[#303030] p-3 cursor-pointer">
        <img src={Icon} alt="User Icon" className="h-3.75 w-3.5" />
      </div>

      <div className="rounded-xl bg-[#303030] text-xs font-semibold px-4 py-2 flex items-center cursor-pointer">
        <span>{user?.mobile}</span>
      </div>

      <div className="absolute top-full left-0 mt-2 z-20 w-48 rounded-lg bg-white shadow-lg border border-gray-200 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <button
          onClick={() => {
            logout();
          }}
          className="w-full px-4 py-2 text-right text-sm text-gray-500 cursor-pointer  hover:bg-gray-50 hover:text-gray-700  transition-colors"
        >
          خروج از حساب کاربری
        </button>
      </div>
    </div>
  );
}

export default HeaderActions;
