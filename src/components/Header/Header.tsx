"use client";

import {
  Gem,
  Github,
  ShipWheel,
  ScrollText,
  AlignJustify,
  X,
} from "lucide-react";
import { useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);
  const clickSideMenuIcon = () => {
    setIsSideMenuActive((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.header}>
        <div className="px-4 w-[1100px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShipWheel width={30} height={30}></ShipWheel>
            <div className="text-xl font-semibold">Spiderly</div>
          </div>
          <div className="hidden md:flex gap-5 md:gap-15">
            <div className="cursor-pointer transition-colors duration-100 hover:text-white  text-gray-400">
              <div>Docs</div>
            </div>
            <div className="cursor-pointer transition-colors duration-100 hover:text-white  text-gray-400">
              <div>Pricing</div>
            </div>
            <div className="cursor-pointer transition-colors duration-100 hover:text-white  text-gray-400">
              <Github></Github>
            </div>
          </div>
          <div className="flex md:hidden">
            {!isSideMenuActive && (
              <div
                onClick={clickSideMenuIcon}
                className="cursor-pointer transition-colors duration-100 hover:text-white text-gray-400"
              >
                <AlignJustify></AlignJustify>
              </div>
            )}
            {isSideMenuActive && (
              <div
                onClick={clickSideMenuIcon}
                className="cursor-pointer transition-colors duration-100 hover:text-white text-gray-400"
              >
                <X></X>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.sidemenu} ${
          isSideMenuActive ? styles.open : ""
        } md:hidden p-5 flex flex-col gap-5`}
      >
          <div className="cursor-pointer transition-colors duration-100 hover:text-white  text-gray-400 w-fit">
            Docs
          </div>
          <div className="cursor-pointer transition-colors duration-100 hover:text-white  text-gray-400 w-fit">
            Pricing
          </div>
          <div className="cursor-pointer transition-colors duration-100 hover:text-white  text-gray-400 w-fit">
            <Github></Github>
          </div>
      </div>

      <div className="mt-[60px]"></div>
    </>
  );
};
