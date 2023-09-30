import OtaCounter from "../../../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import Card from "../../../../UI/card.tsx";
import DiscussRow from "./discuss_row.tsx";
import Filter from "./filter.tsx";

const Discusses = () => (
  <>
    <label className="font-bold text-xl">Diskusi</label>
    <Card className="!p-4">
      <OtaCol className="gap-6">
        <Filter />
        <OtaCol className="gap-3">
          <OtaCounter count={8}>
            <DiscussRow />
          </OtaCounter>
        </OtaCol>
      </OtaCol>
    </Card>
  </>
);

export default Discusses;
