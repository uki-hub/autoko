
const NewsBanner = () => {
  const src =
    "https://static.vecteezy.com/system/resources/previews/009/764/974/non_2x/sunset-seascape-and-tropical-landscape-summer-vacation-and-travel-concept-banner-design-stock-illustration-vector.jpg";

  return (
    <div className="flex flex-row w-full h-96 justify-center">      
      <div className="w-full rounded-lg overflow-hidden">
        <img className="h-full w-full" src={src} />
      </div>
      
    </div>
  );
};

export default NewsBanner;
