import { useState } from "react";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import ExpanderButton from "../../../../UI/expander-button.tsx";
import OtaLine from "../../../../UI-OTA/ota-line.tsx";

const Catatan = () => {
  const [show, setShow] = useState(false);

  return (
    <OtaCol gap={2} className="pl-4 cursor-pointer-all text-sm">
      <OtaRow mainAxis="between" crossAxis="center">
        <label className="text-base font-semibold">
          Kebijakan Pengembalian Toko
        </label>
        <ExpanderButton onClick={() => setShow(!show)} />
      </OtaRow>
      <div className="pl-2 pr-4">
        {show && (
          <label className="text-gray-600">
            Jika produk cacat pabrik bisa langsung komplain di penjual dalam
            2x24 jam DENGAN MENGIRIM VIDEO LENGKAP UNBOXING. Setelah itu
            diharuskan mengirim produk cacat tersebut ke alamat kami DALAM
            KONDISI SAMA SEPERTI KITA KIRIM ( BOX LENGKAP, BARANG MASIH BERSIH).
            Jika tidak ada box maka tidak bisa RETUR setelah itu bisa langsung
            komplain di tokopedia dan akan kita kirim baru 100%.
          </label>
        )}
      </div>
      <OtaLine width={0.8} className="!bg-buttonColor" />
    </OtaCol>
  );
};

export default Catatan;
