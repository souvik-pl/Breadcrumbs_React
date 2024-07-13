import { BreadcrumbProps } from "./common/common.type";
import styles from "./Breadcrumbs.module.css";
import React from "react";

function Breadcrumbs({ children }: BreadcrumbProps) {
  return (
    <div className={styles.container}>
      {children.map((child, index) => (
        <React.Fragment key={index}>{child} &gt;</React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumbs;
