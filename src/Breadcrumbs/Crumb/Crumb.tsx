import { CrumbProps } from "../common/common.type";
import useBreadcrumbContext from "../common/useBreadcrumbContext";
import styles from "./Crumb.module.css";

function Crumb(props: CrumbProps) {
  const { id, label, index } = props;
  const { onSelect, crumbCount } = useBreadcrumbContext();

  return (
    <li>
      <a
        className={styles.label}
        onClick={() => onSelect(id)}
        tabIndex={0}
        aria-current={index === crumbCount - 1 ? "page" : false}
      >
        {label}
      </a>
      <span>&gt;</span>
    </li>
  );
}

export default Crumb;
