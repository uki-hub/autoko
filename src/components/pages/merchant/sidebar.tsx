import { useReducer } from "react";
import Card from "../../UI/card.tsx";
import ExpanderButton from "../../UI/expander-button.tsx";
import styles from "./sidebar.module.css";

type Action = {
  type: "filter" | "etalase" | "promo";
  payload: boolean;
};

type State = {
  filter: boolean;
  etalase: boolean;
  promo: boolean;
};

const sidebarReducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "filter":
      return {
        ...state,
        filter: payload,
      };
      break;

    case "etalase":
      return {
        ...state,
        etalase: payload,
      };
      break;

    case "promo":
      return {
        ...state,
        promo: payload,
      };
      break;
  }
};

const Sidebar = () => {
  const [state, dispatch] = useReducer(sidebarReducer, {
    filter: false,
    etalase: true,
    promo: true,
  });

  return (
    <div className="sticky top-28 flex flex-col gap-4">
      <Card className="flex flex-col gap-1.5 w-full !pt-0 max-h-[400px] shadow overflow-y-scroll hide-scrollbar ">
        <label className="sticky flex flex-row justify-between pt-2 pb-1 border-b-[1px] top-0 font-bold text-primaryVariant bg-white">
          Urutkan
          <ExpanderButton
            onClick={() =>
              dispatch({
                type: "filter",
                payload: !state.filter,
              })
            }
          />
        </label>

        {state.filter &&
          [
            "Paling Sesuai",
            "Terbaru",
            "Harga Tertinggi",
            "Harga Terendah",
            "Ulasan Terbanyak",
            "Pembelian Terbanyak",
            "Dilihat Terbanyak",
            "Pembaruan Terakhir",
          ].map((l) => {
            const className =
              l == "Paling Sesuai"
                ? "bg-secondary text-white font-semibold"
                : "";

            return (
              <div
                className={`py-1.5 pl-2 cursor-pointer rounded hover:bg-secondary hover:text-white hover:font-semibold ${className}`}
              >
                {l}
              </div>
            );
          })}
      </Card>
      <Card className="flex flex-col gap-1.5 w-full !pt-0 max-h-[400px] shadow overflow-y-scroll hide-scrollbar ">
        <label className="sticky flex flex-row justify-between pt-2 pb-1 border-b-[1px] top-0 font-bold text-primaryVariant bg-white">
          Etalase Toko(19)
          <ExpanderButton
            onClick={() =>
              dispatch({
                type: "etalase",
                payload: !state.etalase,
              })
            }
          />
        </label>

        {state.etalase &&
          [
            "Semua Produk",
            "DiskonPROMO",
            "Produk Terjual",
            "New Arrival",
            "Mouse Wireless",
            "Keyboard Wireless",
            "Webcam",
            "Headset",
            "MX Series",
            "Mouse Keyboard Combo",
            "Mobility",
            "Presenter",
            "Mouse Pad Desk Mat",
            "Review and Win",
            "Lifestyle",
            "Speaker",
            "Kerja dari rumah",
            "Wired Mouse",
            "Wired Keyboard",
          ].map((l) => {
            const className =
              l == "Semua Produk"
                ? "bg-secondary text-white font-semibold"
                : "";

            return (
              <div
                className={`py-1.5 pl-2 cursor-pointer rounded hover:bg-secondary hover:text-white hover:font-semibold ${className}`}
              >
                {l}
              </div>
            );
          })}
      </Card>
      <Card className="flex flex-col gap-2 !pt-0 max-h-[200px] overflow-y-scroll hide-scrollbar ">
        <label className="sticky flex flex-row justify-between pt-2 pb-1 border-b-[1px] top-0 font-bold text-primaryVariant bg-white">
          Promo
          <ExpanderButton
            onClick={() =>
              dispatch({
                type: "promo",
                payload: !state.promo,
              })
            }
          />
        </label>
        {state.promo &&
          Array(5)
            .fill(null)
            .map((_) => (
              <Card className={styles.promo}>
                <label className="text-sm">Cashback</label>
                <label className="text-lg font-semibold">10%</label>
                <label className="text-xs text-secondary">
                  min. Pembelanjaan 100rb
                </label>
              </Card>
            ))}
      </Card>
    </div>
  );
};

export default Sidebar;
