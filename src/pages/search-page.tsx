import Products from "../components/pages/search/products/products.tsx";
import Sidebar from "../components/pages/search/sidebar/sidebar.tsx";

const SearchPage = () => {
  return (
    <div className="flex flex-row w-full pb-5">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 pl-10">
        <Products />
      </div>
    </div>
  );
};

export default SearchPage;
