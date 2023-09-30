import Card from "../../../UI/card.tsx";

const RecommendedMerchants = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-end mb-4">
        <label className="text-2xl font-bold">Rekomendasi toko serupa</label>
        <label className="font-bold text-primary">Lihat Semuanya</label>
      </div>
      <div className="grid grid-cols-6 gap-3">
        {Array(3)
          .fill(null)
          .map((_) => (
            <Card className="col-span-2 flex flex-row gap-2 !px-2">
              <div className="flex flex-col gap-1 justify-center items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full" />
                <label className="font-bold text-primary">Nama Toko</label>
                <label className="text-xs text-secondary">
                  Ketengaran toko ini itu ini itu ini itu ini itu
                </label>
              </div>
              <Card className="grid grid-cols-2 w-[80%] !p-0">
                {Array(4)
                  .fill(null)
                  .map((_) => (
                    <img src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/7/13/6466a151-b968-47c6-be96-9e2bf00d4669.jpg" />
                  ))}
              </Card>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default RecommendedMerchants;
