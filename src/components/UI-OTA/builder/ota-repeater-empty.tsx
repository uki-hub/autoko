import { ReactElement } from "react";
import OtaRepeater from "./ota-repeater.tsx";

type Props = {
  count?: number;
  randomize?: boolean;
  min?: number;
  max?: number;
  f(index: number, maxIndex: number): ReactElement;
};

const OtaRepeaterEmpty = (props: Props) => {
  let count = props.count ?? 1;

  if (props.randomize && props.max != null && props.min != null)
    count = Math.floor(Math.random() * (props.max - props.min) + props.min);

  return (
    <OtaRepeater
      array={Array(count).fill(null)}
      f={(_, i) => props.f(i, count)}
    />
  );
};

export default OtaRepeaterEmpty;
