import { useState } from "react";
import OtaRepeaterEmpty from "../UI-OTA/builder/ota-repeater-empty.tsx";
import OtaRow from "../UI-OTA/ota-row.tsx";

const PaginationControl = (props: { className?: string }) => {
  const prev = (
    <svg
      className="rotate-180"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--N400, #66bcbc)"
    >
      <path d="M9.5 17.75a.75.75 0 01-.5-1.28L13.44 12 9 7.53a.75.75 0 011-1.06l5 5a.75.75 0 010 1.06l-5 5a.74.74 0 01-.5.22z"></path>
    </svg>
  );

  const next = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--N400, #66bcbc)">
      <path d="M9.5 17.75a.75.75 0 01-.5-1.28L13.44 12 9 7.53a.75.75 0 011-1.06l5 5a.75.75 0 010 1.06l-5 5a.74.74 0 01-.5.22z"></path>
    </svg>
  );

  const [index, setIndex] = useState(0);

  return (
    <OtaRow className={"text-secondary " + props.className} gap={2}>
      {prev}
      <OtaRepeaterEmpty
        count={9}
        f={(i) => {
          if (i == 9 - 2) return <label className="cursor-pointer">...</label>;
          else
            return (
              <label
                className={
                  (i == index
                    ? "font-bold text-secondaryVariant border-b-[2px] border-b-secondaryVariant "
                    : "") + "text-center px-1.5 cursor-pointer "
                }
                onClick={() => setIndex(i)}
              >
                {i + 1}
              </label>
            );
        }}
      />
      {next}
    </OtaRow>
  );
};

export default PaginationControl;
