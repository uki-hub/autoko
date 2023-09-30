import Card from "../../../../UI/card.tsx";
import styles from "./varian-content.module.css";

const VarianContent = () => {
  // const varian = {
  //   Warna: {
  //     Hitam: {
  //       color: "#000000",
  //     },
  //     Putih: {
  //       color: "#ffffff",
  //     },
  //     Biru: {
  //       color: "#0000ff",
  //     },
  //     Pink: {
  //       color: "##FFC0CB",
  //     },
  //     Merah: {
  //       color: "#ff0000",
  //     },
  //   },
  //   Switch: {
  //     Kuning: {
  //       color: "#ffff00",
  //     },
  //     Cokelat: {
  //       color: "#964B00",
  //     },
  //     Biru: {
  //       color: "#0000ff",
  //     },
  //     Merah: {
  //       color: "#ff0000",
  //     },
  //   },
  // };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <label className="text-lg font-semibold">
          Warna:
          <span className="font-normal text-gray-400">&nbsp;Hitam</span>
        </label>
        <div className="flex flex-row gap-2 flex-wrap">
          {["Hitam", "Putih", "Biru", "Pink", "Merah"].map((v) => {
            const selectedClass = v == "Hitam" ? styles.selected : "";

            return (
              <Card
                className={`min-w-[10%] flex flex-row gap-2 items-center !px-2 cursor-pointer ${selectedClass} hover:border-secondary hover:text-primary`}
              >
                <img
                  className="w-5 h-4"
                  src="https://images.tokopedia.net/img/cache/150/VqbcmM/2022/9/29/f1cbd164-5133-4ce9-9078-8c24268b23e9.png"
                ></img>
                {v}
              </Card>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-lg font-semibold">
          Switch:
          <span className="font-normal text-gray-400">&nbsp;Cokelat</span>
        </label>
        <div className="flex flex-row gap-2 flex-wrap">
          {["Biru", "Cokelat", "Merah"].map((v) => {
            const selectedClass = v == "Cokelat" ? styles.selected : "";

            return (
              <Card
                className={`min-w-[10%] flex flex-row gap-2 items-center !px-2 cursor-pointer ${selectedClass} hover:border-secondary hover:text-primary`}
              >
                <img
                  className="w-5 h-4"
                  src="https://images.tokopedia.net/img/cache/150/VqbcmM/2022/9/29/f1cbd164-5133-4ce9-9078-8c24268b23e9.png"
                ></img>
                {v}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VarianContent;
