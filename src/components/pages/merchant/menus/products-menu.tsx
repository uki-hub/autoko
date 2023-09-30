import Products from "../products.tsx";
import Sidebar from "../sidebar.tsx";

const ProductsMenu = () => {
  return (
    <div className="flex flex-row w-full pb-5">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] pl-10">
        <Products />
      </div>
    </div>
  );
};

export default ProductsMenu;
