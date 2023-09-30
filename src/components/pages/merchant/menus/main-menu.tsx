import OtaLine from "../../../UI-OTA/ota-line.tsx";
import Card from "../../../UI/card.tsx";

const MainMenu = () => {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="grid grid-cols-3 gap-3">
        {Array(3)
          .fill(null)
          .map((_) => (
            <Card className="!p-0 h-[400px]">
              <img
                className="w-full h-full"
                src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2023/5/31/2a1b5471-aa17-4fa4-9f72-d6f4a088e924.jpg.webp"
              />
            </Card>
          ))}
      </div>
      <img
        className="w-full h-[1000px]"
        src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2023/5/31/2a1b5471-aa17-4fa4-9f72-d6f4a088e924.jpg.webp"
      />
      <iframe
        className="w-full h-[500px]"
        src="https://www.youtube.com/embed/JAaat5n8WOA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <OtaLine width={0.8} className="!bg-buttonColor" />
      <div className="flex flex-col gap-2">
        <label className="font-bold text-2xl text-primaryVariant">Hot Deals</label>
        <Card className="!p-0 grid grid-cols-3 grid-rows-3 gap-1 w-full h-[650px]">
          <div className="col-span-2 row-span-2">
            <img
              className="w-full h-full"
              src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2023/5/31/2a1b5471-aa17-4fa4-9f72-d6f4a088e924.jpg.webp"
            />
          </div>
          <div className="">
            <img
              className="w-full h-full"
              src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2023/7/14/b86f603c-4fa7-4a19-a62f-c49819e63f70.jpg.webp"
            />
          </div>
          <div className="">
            <img
              className="w-full h-full"
              src="https://images.tokopedia.net/img/cache/750/VCeHif/2023/3/6/6012e2bc-6cfa-4c16-a178-7bdd57865a3b.jpg.webp?ect=4g"
            />
          </div>
          <div className="">
            <img
              className="w-full h-full"
              src="https://images.tokopedia.net/img/cache/750/VCeHif/2022/10/12/67b9a520-cca5-437a-b213-7d63f7977d39.jpg.webp?ect=4g"
            />
          </div>
          <div className="">
            <img
              className="w-full h-full"
              src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2023/7/14/c19f617c-537c-4dae-a3df-96a468055c5f.jpg.webp?ect=4g"
            />
          </div>
          <div className="">
            <img
              className="w-full h-full"
              src="https://images.tokopedia.net/img/cache/750/VCeHif/2023/4/17/f3e4969c-c38d-4e32-bc0a-0a1b2ca7b1ce.jpg.webp?ect=4g"
            />
          </div>
        </Card>
      </div>
      <OtaLine width={0.8} className="!bg-buttonColor" />
      <div className="flex flex-col gap-2">
        <label className="font-bold text-2xl text-primaryVariant">Produk Unggulan</label>
        
      </div>
    </div>
  );
};

export default MainMenu;
