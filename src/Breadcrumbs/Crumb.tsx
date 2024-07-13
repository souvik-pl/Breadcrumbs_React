import { CrumbProps } from "./common/common.type";
import styles from "./Crumb.module.css";

function Crumb({ clickHandler, children }: CrumbProps) {
  return (
    <div className={styles.crumb} onClick={clickHandler}>
      {children}
    </div>
  );
}

export default Crumb;
