import MenuSection from "../menu-section.tsx";

const Lokasi = () => {
  const lokasi = [
    "Jakarta Utara",
    "Jakarta Timur",
    "Jakarta Pusat",
    "Jakarta Selatan",
    "DKI Jakarta",
  ];

  return (
    <MenuSection label="Lokasi">
      <div className="flex flex-col gap-2 w-full pl-1">
        {lokasi.map((e) => (
          <div className="flex flex-row w-full gap-2">
            <input type="checkbox" className="w-4 !outline-white"></input>
            <label className="text-sm text-secondaryVariant">{e}</label>
          </div>
        ))}
        <label className="text-sm text-secondary mt-1 cursor-pointer">Lihat selengkapnya</label>
      </div>
    </MenuSection>
  );
};

export default Lokasi;
