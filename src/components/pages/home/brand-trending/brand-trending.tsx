import Card from "../../../UI/card.tsx";

import styles from "./brand-trending.module.css";

const BrandTrending = () => {
  const brands = [
    "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2-500x281.png",
    "https://1000logos.net/wp-content/uploads/2017/02/iPhone-Logo-2007.png",
    "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
    "https://1000logos.net/wp-content/uploads/2016/10/Adidas-logo.png",
    "https://1000logos.net/wp-content/uploads/2018/03/Honda-logo.jpg",
    "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo-2006-768x432.png",
    "https://1000logos.net/wp-content/uploads/2020/07/Cheetos-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/07/Doritos-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/07/Kraft-Foods-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/07/Oreo-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/06/Lays-Logo.png",
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-end mb-5 flex-wrap sm:flex-col sm:items-start">
          <h3 className="font-bold text-xl mr-2 sm:mr-4">Brand Trending</h3>
          <div>
            <label>Temukan brand favorit mu&nbsp;</label>
            <label className="font-bold text-primary cursor-pointer">
              Lihat Semua
            </label>
          </div>
        </div>
      </div>
      <Card className={styles._}>
        <div className={styles.__}>
          {brands.map((b, i) => {
            let className = "";

            if (i === 0) className = "col-span-2 row-span-4";
            if (i === 1 || i === 2) className = "col-span-2 row-span-2";

            return (
              <Card className={`p-0 ${className}`}>
                <div
                  className="overflow-hidden h-full w-full bg-no-repeat bg-contain bg-center"
                  style={{ backgroundImage: `url('${b}')` }}
                />
              </Card>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default BrandTrending;
