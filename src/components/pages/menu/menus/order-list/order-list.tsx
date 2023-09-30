import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import Card from "../../../../UI/card.tsx";
import Filter from "./filter.tsx";
import TransactionList from "./transaction-list.tsx";

const OrderList = () => {
  return (
    <>
      <label className="font-bold text-xl">Daftar Transaksi</label>
      <Card className="!p-4">
        <OtaCol className="gap-6">
          <Filter />
          <TransactionList />
        </OtaCol>
      </Card>
    </>
  );
};

export default OrderList;
