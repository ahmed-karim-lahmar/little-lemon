import styles from "./Nav.module.css";
import HamburgerMenu from "@components/Shared/HamburgerMenu";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { useEffect } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [open]);
  return (
    <>
      <div className={styles.burger}>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </div>

      <NavMenu className={styles.desktopNav} />
      {open && <NavMenu className={styles.mobileNav} setOpen={setOpen} />}
    </>
  );
};

export default Nav;
