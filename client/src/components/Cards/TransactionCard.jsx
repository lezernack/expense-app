//STYLES
import styles from "../../styles/Cards/TransactionCard.module.scss";
import { FiBox } from "react-icons/fi";
import { loGameControllerOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { HiOutlineFire } from "react-icons/hi";

// HOOKS
import { useState } from "react";

const CategoryIcon = ({ category }) => {
  const categoryStyle = () => {
    switch (category) {
      default: {
        return {
          background: "#ffbece",
          icon: <HiOutlineFire />,
          color: "#ff6275",
        };
      }

      case "Products": {
        return {
          background: "#fdeacc",
          icon: <FiBox />,
          color: "#f8aa35",
        };
      }

      case "Entertainment":
        return {
          background: "#e4f1d5",
          icon: <loGameControllerOutline />,
          color: "#92c44c",
        };

      case "Bills": {
        return {
          background: "#b7dffd",
          icon: <BsHouseDoor />,
          color: "#5a92d6",
        };
      }
    }
  };

  const stg = categoryStyle(category);

  return (
    <div
      className={styles.iconContainer}
      style={{ background: ctg?.background, color: ctg?.color }}
    >
      {ctg?.icon}
    </div>
  );
};
