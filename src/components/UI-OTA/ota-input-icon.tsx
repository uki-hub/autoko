import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./ota-input.module.css";
import { Sizing } from "./_types.tsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  gap?: Sizing;
  inputClassName?: string;
  boxClassName?: string;
  disableFocus?: boolean;
}
const OtaInputIcon = (props: Props) => {
  return (
    <div
      className={`${
        !props.disableFocus && "focus-within:focus-border"
      } flex flex-row items-center gap-${props.gap ?? 1} ${styles._} ${
        props.boxClassName
      }`}
    >
      {props.icon && props.iconPosition != "end" ? props.icon : null}
      <input {...props} className={props.inputClassName + ""} />
      {props.icon && props.iconPosition == "end" && props.icon}
    </div>
  );
};

export default OtaInputIcon;
