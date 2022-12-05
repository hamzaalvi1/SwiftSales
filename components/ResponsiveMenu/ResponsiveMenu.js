import React, { useState } from "react";
import { Menu,Item } from "burger-menu";
import styles from "./ResponsiveMenu.module.scss"
import 'burger-menu/lib/index.css';
import {HiMenuAlt3} from "react-icons/hi"

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles["responsive-dropdown"]}>
      <div className={styles["ham-menu"]} onClick={() => setIsOpen(!isOpen)}>
        <HiMenuAlt3 />
      </div>
      <Menu
        className={`${styles["drop-parent"]} burger-menu`}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}

      >
        <Item itemKey={"Pricing"} text={"Pricing"}></Item>
        <Item itemKey={"Features"} text={"Features"}></Item>
        <Item itemKey={"Faqs"} text={"Faqs"}></Item>
        <Item itemKey={"Contact Us"} text={"Contact Us"}></Item>

      </Menu>
    </div>
  )
}
export default ResponsiveMenu