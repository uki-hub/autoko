import OtaInputIcon from "../UI-OTA/ota-input-icon.tsx";
import OtaLine from "../UI-OTA/ota-line.tsx";
import styles from "./appbar.module.css";

const AppBar = () => {
  const searchIcon = (
    <svg
      className="unf-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--NN500, #8D96AA)"
    >
      <path d="M20.53 19.46l-4.4-4.4a7.33 7.33 0 10-1.07 1.06l4.41 4.41a.77.77 0 001.06 0 .77.77 0 000-1.07zm-15.78-9a5.75 5.75 0 115.75 5.75 5.76 5.76 0 01-5.75-5.72v-.03z"></path>
    </svg>
  );

  const moreMenuIcon = (
    <svg
      className="unf-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="var(--NN0, #0000000)"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 6.75h14a.75.75 0 1 0 0-1.5H5a.75.75 0 0 0 0 1.5Zm14 4.5H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm-14 6h14a.75.75 0 1 1 0 1.5H5a.75.75 0 1 1 0-1.5Z"
      ></path>
    </svg>
  );

  return (
    <div className="flex flex-row w-full items-center h-24 p-4 px-20 border-b-2 fixed bg-white z-50 sm:px-4 ">
      <div className="flex flex-row w-full items-center h-full">
        <div className={styles._} />
        <div className={styles.__}>
          <label className="sm:hidden">Kategori</label>
          <OtaInputIcon
            icon={searchIcon}
            className="!py-1 items-center rounded-xl !text-base !gap-2"
          />
        </div>
        <div className={styles.___}>
          <div className={styles.cart}>
            <span className={styles.badge}>1</span>
          </div>
          <div className={styles.notif}>
            <span className={styles.badge}>1</span>
          </div>
          <div className={styles.chat}>
            <span className={styles.badge}>1</span>
          </div>
        </div>
        <OtaLine
          orientation="vertical"
          width={1}
          className="!h-2/3 !bg-buttonColor mx-4 !ml-5 sm:mx-3"
        />

        <div className={styles.____}>
          <div className="sm:!hidden">
            <div className={styles.pic}></div>
            <label>Toko</label>
          </div>
          <div className="sm:!hidden">
            <div className={styles.pic}></div>
            <label>Akun</label>
          </div>
          <div className="!hidden sm:!block">
            {moreMenuIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
