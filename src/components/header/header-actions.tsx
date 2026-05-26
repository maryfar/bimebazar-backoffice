import Icon from "@/assets/images/Icon.svg";

import { useAuthStore } from "@/store/auth.store";

function HeaderActions() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex gap-3">
      <div className="rounded-xl bg-[#303030] p-3">
        <img src={Icon} alt="User Icon" className="h-5 w-5" />
      </div>

      <div className="rounded-xl bg-[#303030] px-4 py-2">
        <span>{user?.mobile}</span>
      </div>
    </div>
  );
}

export default HeaderActions;
