import {
  FlexCrossAxisAlingment,
  FlexMainAxisAlingment,
  Sizing,
} from "./_types.tsx";

type Props = {
  gap?: Sizing;
  mainAxis?: FlexMainAxisAlingment;
  crossAxis?: FlexCrossAxisAlingment;
  className?: string;
  onClick?: () => void;
};

const OtaRow = (
  props: React.PropsWithChildren<Props> = {
    mainAxis: "start",
    crossAxis: "start",
    gap: 0,
  }
) => {
  const mainAxis = props.mainAxis ? `justify-${props.mainAxis}` : "";
  const crossAxis = props.crossAxis ? `items-${props.crossAxis}` : "";
  const gap = props.gap ? `gap-${props.gap}` : "";

  return (
    <div
      className={`flex flex-row ${mainAxis} ${crossAxis} ${gap} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default OtaRow;
