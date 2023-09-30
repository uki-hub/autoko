import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import Card from "../../../../UI/card.tsx";
import Filter from "./filter.tsx";

const Reviews = () => (
  <>
    <label className="font-bold text-xl">Ulasan</label>
    <Card className="!p-4">
      <OtaCol>
        <Filter />
      </OtaCol>
    </Card>
  </>
);

export default Reviews;
