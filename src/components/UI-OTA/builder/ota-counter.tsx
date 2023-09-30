type Props = {
  count?: number;
  randomize?: boolean;
  min?: number;
  max?: number;
};

const OtaCounter = (props: React.PropsWithChildren<Props> = { count: 1, randomize: false }) => {
  let count = props.count;

  if (props.randomize && props.max != null && props.min != null)
    count = Math.floor(Math.random() * (props.max - props.min) + props.min);

  return Array(count)
    .fill(null)
    .map((_) => props.children);
};

export default OtaCounter;
