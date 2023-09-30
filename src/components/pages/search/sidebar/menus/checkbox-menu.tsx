import MenuSection from "../menu-section.tsx";

type Props = {
  label: string;
  options: Array<string>;
};

const CheckboxMenu = (props: Props) => {
  return (
    <MenuSection label={props.label}>
      <div className="flex flex-col gap-2 w-full pl-1">
        {props.options.map((e) => (
          <div className="flex flex-row w-full gap-2">
            <input id={`${props.label}-${e}`} type="checkbox" className="w-4 !outline-white cursor-pointer" />
            <label htmlFor={`${props.label}-${e}`} className="text-sm text-secondaryVariant cursor-pointer">{e}</label>
          </div>
        ))}
      </div>
    </MenuSection>
  );
};

export default CheckboxMenu;
