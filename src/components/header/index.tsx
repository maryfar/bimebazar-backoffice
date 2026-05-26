import Logo from "@/assets/images/Logo.svg";

import HeaderActions from "./header-actions";

interface HeaderProps {
  showActions?: boolean;
}

function Header({ showActions = false }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between bg-[#1A1A1A] p-3 text-white">
      <img src={Logo} alt="Bimebazar" />

      {showActions && <HeaderActions />}
    </header>
  );
}

export default Header;
