const ProductImages = () => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-28 flex flex-col gap-4">
        <div className="rounded-xl w-full h-[500px] overflow-hidden">
          <img
            className="w-full h-full"
            src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/2/3e45d4b3-36dc-4cf3-b503-17c9732c7f44.jpg.webp?ect=4g"
          />
        </div>
        <div className="flex flex-row gap-2 w-full h-[100px] px-2 overflow-x-auto hide-scrollbar">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="rounded-lg h-full min-w-[23.6%] overflow-hidden"
              >
                <img
                  className="w-full h-full"
                  src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/2/3e45d4b3-36dc-4cf3-b503-17c9732c7f44.jpg.webp?ect=4g"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
