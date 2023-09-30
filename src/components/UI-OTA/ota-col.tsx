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
};

const OtaCol = (
  props: React.PropsWithChildren<Props> = {
    mainAxis: "start",
    crossAxis: "start",
    gap: 0,
  }
) => {
  return (
    <div
      className={`flex flex-col justify-${props.mainAxis} items-${props.crossAxis} gap-${props.gap} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default OtaCol;
