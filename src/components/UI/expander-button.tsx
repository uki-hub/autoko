import { MouseEventHandler, useState } from "react";
import styles from "./expander-button.module.css";

type Props = {
  onClick?: MouseEventHandler<SVGElement>;
};

const ExpanderButton = (props: Props) => {
  const [expanded, setExpanded] = useState(false);

  const className = expanded ? styles.__ : styles.___;

  return (
    <svg
      className={`${styles._} ${className}`}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--color-icon-enabled, #2E3137)"
      onClick={(e) => {
        setExpanded(!expanded);

        if(props.onClick) props.onClick(e);
      }}
    >
      <path d="M12 15.25a.74.74 0 01-.53-.22l-5-5A.75.75 0 017.53 9L12 13.44 16.47 9a.75.75 0 011.06 1l-5 5a.74.74 0 01-.53.25z"></path>
    </svg>
  );
};

export default ExpanderButton;
