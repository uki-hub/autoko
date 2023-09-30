import OtaLine from "../../../../UI-OTA/ota-line.tsx";

const InfoContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label className="text-base font-semibold">
          Kebijakan Pengembalian
        </label>
        <span>
          Jika produk cacat pabrik bisa langsung komplain di penjual dalam 2x24
          jam DENGAN MENGIRIM VIDEO LENGKAP UNBOXING. Setelah itu diharuskan
          mengirim produk cacat tersebut ke alamat kami DALAM KONDISI SAMA
          SEPERTI KITA KIRIM ( BOX LENGKAP, BARANG MASIH BERSIH). Jika tidak ada
          box maka tidak bisa RETUR setelah itu bisa langsung komplain di
          tokopedia dan akan kita kirim baru 100%.
        </span>
      </div>
      <OtaLine className="col-span-3 self-center !h-[0.3px] !bg-buttonColor" />
      <div className="flex flex-col">
        <label className="text-base font-semibold">Jadwal Pengiriman</label>
        <span>
          <ul>
            <li>
              Gojek/Grab SAMEDAY: Pesanan dibawah JAM 14.30 akan dikirim di hari
              yang sama.
            </li>
            <li>
              Gojek/Grab INSTAN: Pesanan dibawah JAM 16.30 akan dikirim di hari
              yang sama.
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default InfoContent;
