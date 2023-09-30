type param = {
  orientation?: "horizontal" | "vertical" | undefined;
  value: number;
};

type style = {
  width?: number;
  height?: number;
};

const Spacer = ({ orientation, value }: param) => {
  const isHorizontal: boolean = orientation === "horizontal" || orientation == undefined;
//   const className = `flex ${isHorizontal ? "flex-row" : "flex-column"}`;

  const style: style = {};

  if (isHorizontal) style.width = value;
  else style.height = value;

  return <div style={style} />;
};

export default Spacer;
