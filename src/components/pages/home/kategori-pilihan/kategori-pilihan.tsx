import Card from "../../../UI/card.tsx";

import Spacer from "../../../UI/spacer.tsx";
import KategoriPilihanItem from "./kategori-pilihan-item.tsx";
import styles from './kategori-pilihan.module.css';

const KategoriPilihan = () => {
  return (
    <Card className={styles.card}>
      <p className="text-xl font-bold">Kategori Pilihan</p>
      <Spacer orientation="vertical" value={20} />
      <div className="flex flex-row w-full gap-2 overflow-x-scroll hide-scrollbar">
        <KategoriPilihanItem />
        <KategoriPilihanItem />
        <KategoriPilihanItem />
        <KategoriPilihanItem />
        <KategoriPilihanItem />
        <KategoriPilihanItem />
        <KategoriPilihanItem />
      </div>
    </Card>
  );
};

export default KategoriPilihan;
