import { ReactElement } from "react";

type Props<T> = {
  array: Array<T>;
  f(data: T, index: number): ReactElement;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const OtaRepeater = <T extends unknown>(props: Props<T>) => {
  return props.array.map(props.f);
};

export default OtaRepeater;
