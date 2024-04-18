import { useEffect } from "react";
import Hero from "./components/hero";
import Products from "./components/products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./components/toprated/TopRated";
import Banner from "./components/banner";
import Subscribe from "./components/subscribe";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import image1 from "./assets/shopping.png";
import image2 from "./assets/sale.png";
import image3 from "./assets/women.png";
import { useModalStore } from "./components/hooks/useModal";
import Modal from "./components/modal/Modal";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";

function App() {
  const { modal, onOpen, onClose } = useModalStore();

  const ImageList = [
    {
      id: 1,
      img: image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "Pakaian laki-laki bahan Terbaik ini merupakan produk terlaris yang cocok untuk kamu gunakan saat pergi ke kantor. Nyaman dan stylish!",
    },
    {
      id: 2,
      img: image3,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: image2,
      title: "70% off on all Products Sale",
      description:
        "Termurah se-Jogja! Paket Internet  mulai 20 ribuan aja. Beli banyak, diskonnya juga lebih banyak. Borong sebelum kehabisan!",
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Hero ImageList={ImageList} />
      <Products />
      <TopProduct />
      <Banner />
      <Subscribe />
      <Testimonial />
      {/* <Link to="/home">Home</Link>,{modal ? <Modal /> : null} */}
    </div>
  );
}

export default App;
