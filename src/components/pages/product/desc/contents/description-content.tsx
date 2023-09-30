import { useState } from "react";
import styles from "./description-content.module.css";

const DescriptionContent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={`${styles._} ${expanded ? "" : styles.wrap}`}>
        Kantong Keyboard untuk ekstra proteksi :
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tokopedia.com/tokolaptopid/noir-keyboard-sleeve-65-for-extra-protection"
        >
          https://www.tokopedia.com/tokolaptopid/noir-keyboard-sleeve-65-for-extra-protection
        </a>
        <br />
        <br />
        Spesifikasi lengkap
        <br />
        <br />- 60% KEYBOARD LAYOUT (61 Tombol)
        <br />- HOT-SWAPPABLE (Support up to 5 pin Switches)
        <br />- Outemu Switch Bawaan (Blue Switch, Red Switch)
        <br />- Pre-Lube Stabilizer (SHIFT, ENTER, SPACE-BAR, BACKSPACE)
        <br />- Include Damper Foam (EVA FOAM)
        <br />- MAGIC FN
        <br />- Detachable Type-C
        <br />- Onboard Memory
        <br />- ALL ANTIGHOSTING
        <br />- RGB Per-Key
        <br />- Berat 566gr
        <br />- Software MK857 download di www.fantech.id
        <br />
        <br />
        isi dalam kemasan :<br />1 unit MAXFIT61 MK857 HITAM
        <br />1 buah keycaps puller
        <br />1 buah switch puller
        <br />1 buah kabel Type A to Type C<br />1 buah buku manual
        <br />1 lembar kartu garansi
        <br />
        <br />
        Garansi Resmi Fantech Care 1 Tahun
        <br />
        <br />
        Selamat Bermain #CALONJUARA dengan Gaming Gear Terbaik !<br />
        #GEARUPANDWIN
      </div>
      <label
        className="cursor-pointer text-[14px] font-bold text-primary"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
      </label>
    </>
  );
};

export default DescriptionContent;
