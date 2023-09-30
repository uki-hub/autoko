import OtaButton from "../../../UI-OTA/ota-button.tsx";
import OtaInput from "../../../UI-OTA/ota-input.tsx";
import OtaLabelField from "../../../UI-OTA/ota-label-field.tsx";


const TopUpTagihanForm = () => {
    return <div className="flex flex-row w-full gap-2 justify-normal items-end sm:flex-col">
        <OtaLabelField label="No." labelPositon="topStart">
            <OtaInput placeholder="08123456789" />
        </OtaLabelField>
        <OtaLabelField label="Nominal" labelPositon="topStart">
            <OtaInput placeholder="Rp. 50.000" />
        </OtaLabelField>
        <OtaButton className="sm:mt-2 sm:w-full">Beli</OtaButton>
    </div>;
}
 
export default TopUpTagihanForm;