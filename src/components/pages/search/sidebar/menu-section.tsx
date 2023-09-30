import { useState } from "react";
import OtaLine from "../../../UI-OTA/ota-line.tsx";

type Props = {
  label: string;
};

const MenuSection = (props: React.PropsWithChildren<Props>) => {
  const [open, setOpen] = useState(false);

  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 24h24V0H0z" />
        <path
          d="M15.828 15.239L12 11.41l-3.827 3.83c-.509.508-1.326.521-1.815.032-.49-.49-.475-1.306.033-1.814l4.718-4.719c.49-.49 1.292-.49 1.782 0l4.719 4.719c.508.508.521 1.324.032 1.814s-1.306.476-1.814-.032"
          fill="#6c727c"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );

  return (
    <div className="relative flex flex-col items-start mb-2">
      <div className="flex flex-row w-full font-bold text-base justify-between items-center mb-2.5">
        <label>{props.label}</label>
        <div className="rounded-full cursor-pointer hover:bg-backgroundColor" onClick={() => setOpen(!open)}>
          {arrowIcon}
        </div>
      </div>
      {open && props.children}
      <OtaLine orientation="horizontal" width={0.8} className={`w-full !bg-buttonColor ${open ? "mt-3" : "mt-0"}`}/>
    </div>
  );
};

export default MenuSection;
