"use client";
import Menu from "./menu";

/**
 * ヘッダーのコンポーネント
 */
const Header = () => {
  return (
    <header className="w-full h-[70px] p-3 bg-base-beige border-b border-base-gray">
      <Menu />
    </header>
  );
};

export default Header;
