import { ButtonHTMLAttributes } from "react";
import OtaButton from "./ota-button.tsx";

const OtaButtonOutlined = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <OtaButton {...props} className={`bg-transparent text-primary border-[1px] border-secondary py-1.5 active:bg-transparent active:border-primary ${props.className}`}>{props.children}</OtaButton>;
}
 
export default OtaButtonOutlined;