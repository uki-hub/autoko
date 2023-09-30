import Card from "../../../UI/card.tsx";
import Spacer from "../../../UI/spacer.tsx";
import TopUpTagihanForm from "./top-up-tagihan-form.tsx";

const TopUpTagihan = () => {
  const menus = ["Pulsa", "Paket Data", "Token Listrik", "E-Tool"];

  const selectedMenu = menus[0];

  return (
    <Card className="w-full">
      <p className="text-xl font-bold">Top Up & Tagihan</p>
      <Spacer orientation="vertical" value={20} />
      <Card className="px-0 rounded-b-none">
        <div className="flex flex-row sm:h-12 gap-3">
          {menus.map((e) => {
            const isSelectedMenu = selectedMenu === e;
            let selectedClass = "";

            if (isSelectedMenu)
              selectedClass =
                "border-b-2 border-primary font-bold text-primary";

            return (
              <div
                className={`w-1/4 text-secondary h-full text-center font-semibold select-none cursor-pointer ${selectedClass}`}
              >
                {e}
              </div>
            );
          })}
          <div className="font-extrabold text-secondary cursor-pointer h-full w-2">
            :
          </div>
        </div>
      </Card>
      <Card className="flex rounded-t-none border-t-0 pt-4 pb-5">
        <TopUpTagihanForm />
      </Card>
    </Card>
  );
};

export default TopUpTagihan;
