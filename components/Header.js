import Image from "next/image";
import logo from "../logo.png";
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  UserIcon,
  LightningBoltIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 justify-between
    items-center"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src={logo}
        width={200}
        height={100}
        alt="logo"
      />
    </header>
  );
}

export default Header;
