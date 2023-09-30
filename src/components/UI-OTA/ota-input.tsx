import { InputHTMLAttributes, useState } from "react";
import styles from "./ota-input.module.css";

type State = {
  focus: boolean;
};

const OtaInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const [state, setState] = useState<State>({ focus: false });

  return (
    <div
      className={`${styles._} ${props.className} ${
        state.focus && "focus-border"
      }`}
    >
      <input
        {...props}
        onFocus={() => setState({ focus: true })}
        onBlur={() => setState({ focus: false })}
      />
    </div>
  );
};

export default OtaInput;
