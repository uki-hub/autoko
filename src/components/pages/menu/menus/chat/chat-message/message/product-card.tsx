import OtaCounter from "../../../../../../UI-OTA/builder/ota-counter.tsx";
import OtaButtonOutlined from "../../../../../../UI-OTA/ota-button-outlined.tsx";
import OtaButton from "../../../../../../UI-OTA/ota-button.tsx";
import OtaCol from "../../../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../../../UI/card.tsx";

type Props = {
  className?: string;
};

const ProductCard = (props: Props) => {
  return (
    <Card className={`w-full !p-2 !pb-3 ${props.className}`}>
      <OtaCol gap={3}>
        <OtaRow gap={2}>
          <Card className="!p-0 h-20 w-20 flex-shrink-0">
            <img
              className="h-full w-full object-fill"
              src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/3/e7486b1b-6191-4eae-acb8-9eebda867622.jpg"
            />
          </Card>

          <OtaCol gap={1}>
            <span className="line-clamp-2 font-semibold">
              Broodis Kemeja Basic Polos Lengan Panjang Cotton Black Button
              White - COTTON BLACK, M
            </span>
            <OtaRow className="text-xs flex-wrap" gap={0.5}>
              <OtaCounter count={2}>
                <Card className="!p-0 !px-1.5 font-semibold bg-background text-primary">
                  Cotton Black
                </Card>
              </OtaCounter>
            </OtaRow>

            <OtaRow className="text-xs" crossAxis="center" gap={1}>
              <Card className="!px-1 !py-0.5 font-semibold bg-secondary text-onSecondary">
                28%
              </Card>
              <span className="text-sm font-bold">Rp80.880.000</span>

              <span className="line-through text-gray-500">Rp.102.042.000</span>
            </OtaRow>
          </OtaCol>
        </OtaRow>
        <OtaRow gap={2}>
          <OtaButtonOutlined className="w-full !py-1.5">
            + Keranjang
          </OtaButtonOutlined>
          <OtaButton className="w-full !py-1.5">Beli</OtaButton>
        </OtaRow>
      </OtaCol>
    </Card>
  );
};

export default ProductCard;
