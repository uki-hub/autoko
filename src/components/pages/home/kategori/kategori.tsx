import Card from "../../../UI/card.tsx";


const Kategori = () => {
  const kategori = [
    "Kategori",
    "Handphone & Tablet",
    "Top-Up & Tagihan",
    "Perawatan Hewan",
    "Travel & Entertainment",
    "Keuangan",
    "Komputer & Laptop",
  ];

  return (
    <div className="flex flex-row gap-2 overflow-x-scroll hide-scrollbar">
      {kategori.map((k) => (
        <Card className="!py-1 !px-4 rounded-full min-w-fit bg-onPrimary text-primary">{k}</Card>
      ))}
    </div>
  );
};

export default Kategori;
