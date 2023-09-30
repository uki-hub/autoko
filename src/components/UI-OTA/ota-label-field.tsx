import { PropsWithChildren, ReactNode } from "react";

type Props = {
  label: ReactNode;
  labelClassName?: string;
  labelPositon?:
    | "midStart"
    | "midCenter"
    | "midEnd"
    | "topStart"
    | "topCenter"
    | "topEnd"
    | "bottomStart"
    | "bottomCenter"
    | "bottomEnd"
    | undefined;
};

const OtaLabelField = (props: PropsWithChildren<Props>) => {
  let labelClass = "";
  let isRow = true;

  switch (props.labelPositon) {
    case undefined:
    case "midStart":
    case "midCenter":
    case "midEnd":
      labelClass = "flex-row";
      break;

    case "topStart":
    case "topCenter":
    case "topEnd":
    case "bottomStart":
    case "bottomCenter":
    case "bottomEnd":
      labelClass = "flex-col";
      isRow = false;
      break;
  }

  if (props.labelPositon?.includes("bottom")) labelClass += " flex-col-reverse";

  if (props.labelPositon?.includes("Start")) {
    labelClass += ` ${isRow ? "justify-start" : "items-start"}`;
  } else if (props.labelPositon?.includes("Center")) {
    labelClass += ` ${isRow ? "justify-center" : "items-center"}`;
  } else if (props.labelPositon?.includes("End")) {
    labelClass += ` ${isRow ? "justify-end" : "items-end"}`;
  } else {
    labelClass += " justify-start";
  }

  return (
    <div className={`flex w-full gap-1 text-secondary font-semibold ${labelClass}`}>
      <label className={`text-sm ${props.labelClassName} `}>
        {props.label}
      </label>
      {props.children}
    </div>
  );
};

export default OtaLabelField;
