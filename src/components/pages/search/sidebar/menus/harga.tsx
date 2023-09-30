import OtaInputIcon from "../../../../UI-OTA/ota-input-icon.tsx";
import MenuSection from "../menu-section.tsx";

const Harga = () => {
  const rp = (
    <div className="px-2.5 py-1.5 font-semibold bg-background text-secondary">
      Rp
    </div>
  );

  return (
    <MenuSection label="Harga">
      <div className="flex flex-col gap-2 w-full pl-1">
        <OtaInputIcon placeholder="Harga Minimum" icon={rp} className="!p-0 overflow-hidden !text-[1rem]" />
        <OtaInputIcon placeholder="Harga Maksimum" icon={rp} className="!p-0 overflow-hidden !text-[1rem]" />
      </div>
    </MenuSection>
  );
};

export default Harga;
