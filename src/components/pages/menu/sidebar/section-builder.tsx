import { useState } from "react";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../UI-OTA/ota-line.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";
import ExpanderButton from "../../../UI/expander-button.tsx";
import OtaRepeater from "../../../UI-OTA/builder/ota-repeater.tsx";

type Props = {
  title: string;
  selectedSection: string;
  sections: Array<{ label: string; onClick: () => void }>;
};

const SectionBuilder = (props: Props) => {
  const [show, setShow] = useState(true);

  const badge = (n: number) => (
    <OtaCol
      className="font-semibold rounded-full text-xs bg-primary text-onPrimary w-6 h-6"
      mainAxis="center"
      crossAxis="center"
    >
      {n}
    </OtaCol>
  );

  return (
    <OtaCol className="gap-2 text-sm">
      <OtaLine width={0.8} className="!bg-gray-200" />
      <OtaRow mainAxis="between" crossAxis="center" className="px-4">
        <label className="font-bold">{props.title}</label>
        <ExpanderButton onClick={() => setShow(!show)} />
      </OtaRow>

      {show && (
        <OtaCol className="pl-6 pr-4 text-gray-700" gap={2}>
          <OtaRepeater
            array={props.sections}
            f={(d) => (
              <OtaRow
                className={
                  (props.selectedSection == d.label
                    ? "font-bold rounded bg-gray-200 text-black"
                    : "") + " p-1.5 cursor-pointer"
                }
                crossAxis="center"
                mainAxis="between"
                onClick={d.onClick}
              >
                {d.label}
                {badge(89)}
              </OtaRow>
            )}
          />
        </OtaCol>
      )}
    </OtaCol>
  );
};

export default SectionBuilder;
