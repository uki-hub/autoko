import OtaCounter from "../../../../../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../../../UI-OTA/ota-row.tsx";
import Card from "../../../../../../UI/card.tsx";
import Message, { BaseMessageProps } from "./message.tsx";
import ProductCard from "./product-card.tsx";

interface Props extends BaseMessageProps {}

const MessageProducts = (props: Props) => {
  const nextIcon = (
    <svg
      width="24"
      height="24"
      fill="none"
    >
      <path
        d="M9.13 8.172L12.96 12 9.13 15.827c-.508.508-.52 1.326-.032 1.815s1.305.475 1.814-.033l4.72-4.718c.49-.49.49-1.292 0-1.782l-4.72-4.72c-.508-.508-1.324-.52-1.814-.032s-.476 1.305.032 1.814z"
        fill="#5d6ba2"
      />
    </svg>
  );

  return (
    <Message isMe={props.isMe}>
      <OtaCol className="max-w-[55%]">
        <Card className="!p-2 !pb-3 border-b-0 rounded-b-none">
          <OtaCol gap={3}>
            <OtaCounter count={4}>
              <ProductCard className="shadow" />
            </OtaCounter>
            <div className="mt-2">
              <span>
                📢 PROMO spesial buat Uki, hanya di toko kami. Yuk, belanja
                pakai promo ini
              </span>
              <span className="float-right text-gray-400">21:00</span>
            </div>
          </OtaCol>
        </Card>
        <OtaRow
          className="px-2 py-2 font-bold cursor-pointer border-[1px] rounded-b-md text-secondary hover:bg-gray-200"
          mainAxis="between"
          crossAxis="center"
        >
          <span>Lihat Selengkapnya</span>
          {nextIcon}
        </OtaRow>
      </OtaCol>
    </Message>
  );
};

export default MessageProducts;
