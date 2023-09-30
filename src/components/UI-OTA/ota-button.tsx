import { ButtonHTMLAttributes } from "react";

const OtaButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`bg-primary text-onPrimary font-semibold py-2 px-4 rounded-lg text-sm disabled:bg-background disabled:text-onBackground active:bg-secondary ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default OtaButton;
