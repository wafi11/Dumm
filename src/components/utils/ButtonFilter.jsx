import { useEffect } from "react";
import useFakeStore from "../hooks/FakeStoreApi";

const ButtonFilter = () => {
  const { setFilteredCategory, categorys } = useFakeStore();
  return (
    <div className="text-gray-500 flex gap-4 text-xl ">
      <button
        className={`${
          setFilteredCategory
            ? "border-b-[3px] border-gray-800"
            : "bprder-transparent"
        } text-gray-500`}
        data-aos="fade-up"
        data-aos-delay="0"
        onClick={() => setFilteredCategory("")}>
        All
      </button>
      <button
        data-aos="fade-up"
        data-aos-delay="200"
        className={`${
          setFilteredCategory
            ? "border-b-[3px] border-gray-800"
            : "bprder-transparent"
        } text-gray-500`}
        onClick={() => setFilteredCategory("laptops")}>
        Laptop
      </button>
      <button
        data-aos="fade-up"
        data-aos-delay="400"
        className={`${
          setFilteredCategory
            ? "border-b-[3px] border-gray-800"
            : "bprder-transparent"
        } text-gray-500`}
        onClick={() => setFilteredCategory("smartphones")}>
        Smartphone
      </button>
      <button
        data-aos="fade-up"
        data-aos-delay="600"
        className={`${
          setFilteredCategory
            ? "border-b-[3px] border-gray-800"
            : "bprder-transparent"
        } text-gray-500`}
        onClick={() => setFilteredCategory("skincare")}>
        Skincare
      </button>
      <button
        data-aos="fade-up"
        data-aos-delay="800"
        className={`${
          setFilteredCategory
            ? "border-b-[3px] border-gray-800"
            : "bprder-transparent"
        } text-gray-500`}
        onClick={() => setFilteredCategory("home-decoration")}>
        Furniture
      </button>
    </div>
  );
};

export default ButtonFilter;
