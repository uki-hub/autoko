import OtaCol from "../../../UI-OTA/ota-col.tsx";
import Card from "../../../UI/card.tsx";
import Profile from "./profile.tsx";
import SectionBuilder from "./section-builder.tsx";

const SideBar = (props: {
  selectedMenu: string;
  onMenuClick: (menu: string) => void;
}) => {
  return (
    <Card className="w-[20%] shadow !p-0 !py-2 h-min !rounded-xl">
      <OtaCol className="gap-2">
        <Profile />
        <SectionBuilder
          title="Daftar Transaksi"
          selectedSection={props.selectedMenu}
          sections={[
            { label: "Semua", onClick: () => props.onMenuClick("Semua") },
            {
              label: "Belum Bayar",
              onClick: () => props.onMenuClick("Belum Bayar"),
            },
            { label: "Diproses", onClick: () => props.onMenuClick("Diproses") },
            { label: "Dikirim", onClick: () => props.onMenuClick("Dikirim") },
            { label: "Berhasil", onClick: () => props.onMenuClick("Berhasil") },
            {
              label: "Tidak Berhasil",
              onClick: () => props.onMenuClick("Tidak Berhasil"),
            },
          ]}
        />
        <SectionBuilder
          title="Kotak Masuk"
          selectedSection={props.selectedMenu}
          sections={[
            { label: "Chat", onClick: () => props.onMenuClick("Chat") },
            {
              label: "Diskusi Produk",
              onClick: () => props.onMenuClick("Diskusi Produk"),
            },
            { label: "Ulasan", onClick: () => props.onMenuClick("Ulasan") },
          ]}
        />
      </OtaCol>
    </Card>
  );
};

export default SideBar;
