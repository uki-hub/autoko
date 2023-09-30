import OtaCounter from "../../../../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../../../../UI-OTA/ota-col.tsx";
import MessageMedia from "./message/message-media.tsx";
import MessageProduct from "./message/message-product.tsx";
import MessageProducts from "./message/message-products.tsx";
import MessageText from "./message/message-text.tsx";

const Messages = () => {
  return (
    <OtaCol className="text-sm w-full px-2 py-2 overflow-y-auto">
      <span className="text-xs text-center mb-4 text-gray-400">
        Hati-hati penipuan! Mohon tidak bertransaksi di luar Tokopedia & hindari
        menghubungi penjual selain melalui fitur Chat di aplikasi Tokopedia.
        <label className="font-semibold cursor-pointer text-secondary">
          &nbsp;Baca Panduan Keamanan.
        </label>
      </span>

      <OtaCol className="gap-2 w-full">
        <MessageMedia isMe={true} />
        <MessageProduct isMe={true} />
        <MessageProducts isMe={false} />
        <OtaCounter count={5}>
          <label className="w-full text-center text-xs text-gray-500">
            22 Jun 2023
          </label>
          <MessageText
            isMe={true}
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sapien, convallis in risus et, vestibulum efficitur tellus. Morbi non finibus nulla. Quisque ac sem dolor. Sed consequat nunc id urna mattis, id sollicitudin tellus placerat."
            time="18:13"
          />
          <MessageText
            isMe={false}
            message="siap kak kami siapkan dulu semoga barangnya memuaskan ya ka"
            time="07:40"
          />
          <MessageText
            isMe={false}
            message="Lorem ipsum dolor sit amet"
            time="07:40"
          />
          <label className="w-full text-center text-xs text-gray-500">
            7 Aug 2023
          </label>
          <MessageText
            isMe={true}
            message="Lorem ipsum dolor sit amet"
            time="18:13"
          />
        </OtaCounter>
      </OtaCol>
    </OtaCol>
  );
};

export default Messages;
