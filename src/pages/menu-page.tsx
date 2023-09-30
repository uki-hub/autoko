import { useState } from "react";
import OtaRow from "../components/UI-OTA/ota-row.tsx";
import OrderList from "../components/pages/menu/menus/order-list/order-list.tsx";
import SideBar from "../components/pages/menu/sidebar/sidebar.tsx";
import Chat from "../components/pages/menu/menus/chat/chat.tsx";
import Discusses from "../components/pages/menu/menus/discusses/discusses.tsx";
import Reviews from "../components/pages/menu/menus/reviews/reviews.tsx";
import OtaCol from "../components/UI-OTA/ota-col.tsx";

type Menus =
  | "Semua"
  | "Belum Bayar"
  | "Diproses"
  | "Dikirim"
  | "Berhasil"
  | "Tidak Berhasil"
  | "Chat"
  | "Diskusi Produk"
  | "Ulasan";

const MenuPage = () => {
  const [menu, setMenu] = useState<Menus>("Semua");

  const buildMenu = () => {
    switch (menu) {
      case "Semua":
      case "Belum Bayar":
      case "Diproses":
      case "Dikirim":
      case "Berhasil":
      case "Tidak Berhasil":
        return <OrderList />;

      case "Chat":
        return <Chat />;

      case "Diskusi Produk":
        return <Discusses />;

      case "Ulasan":
        return <Reviews />;
    }
  };

  return (
    <OtaRow className="gap-10 h-min">
      <SideBar
        selectedMenu={menu}
        onMenuClick={(m) => {
          console.log(m);
          setMenu(m as Menus);
        }}
      />
      <OtaCol className="relative w-[75%] gap-4">
        {buildMenu()}
      </OtaCol>
    </OtaRow>
  );
};

export default MenuPage;
