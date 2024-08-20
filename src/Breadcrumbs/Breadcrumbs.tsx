import { BreadcrumbContext } from "./common/BreadcrumbContext";
import { BreadcrumbsProps } from "./common/common.type";
import styles from "./Breadcrumbs.module.css";

function Breadcrumbs(props: BreadcrumbsProps) {
  const { children, onSelect } = props;
  const crumbCount = children.length;
  return (
    <BreadcrumbContext.Provider value={{ onSelect, crumbCount }}>
      <nav aria-label="Breadcrumb">
        <ul className={styles.container}>{children}</ul>
      </nav>
    </BreadcrumbContext.Provider>
  );
}

export default Breadcrumbs;
