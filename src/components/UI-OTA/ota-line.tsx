type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Props = {
  orientation?: "horizontal" | "vertical" | undefined;
  className?: string;
  width?: number;
  color?: RGB | RGBA | HEX | undefined;
};

const OtaLine = (props: Props) => {
  const value = `${props.width ?? 1}px`;

  const style = {
    height: value,
    width: "100%",
    backgroundColor: props.color,
  };

  if (props.orientation === "vertical") {
    style.height = "100%";
    style.width = value;
  }

  return <div className={`bg-primary ${props.className}`} style={style} />;
};

export default OtaLine;
