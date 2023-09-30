import Card from "../../../UI/card.tsx";
import CheckboxMenu from "./menus/checkbox-menu.tsx";
import Harga from "./menus/harga.tsx";
import Lokasi from "./menus/lokasi.tsx";

const Sidebar = () => {
  return (
    <Card className="sticky top-28 flex flex-col w-full bg-white shadow">
      <CheckboxMenu label="Urutkan" options={["Paling Sesuai", "Terbaru", "Paling Dekat", "Harga Terendah", "Harga Tertinggi"]} />
      <Lokasi />
      <Harga />
      <CheckboxMenu label="Kondisi" options={["Baru", "Bekas"]} />
      <CheckboxMenu label="Rating" options={["5", "4", "3", "2", "1"]} />
      <CheckboxMenu label="Jenis Toko" options={["Official", "Star", "Gold", "Silver", "Bronze"]} />
    </Card>
  );
};

export default Sidebar;
