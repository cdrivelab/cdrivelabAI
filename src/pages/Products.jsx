import ProductHero from "../components/products/ProductHero.jsx";
import FeaturedProduct from "../components/products/FeaturedProduct.jsx";
import Available24Section from "../components/products/Available24Section.jsx";
import OtherProducts from "../components/products/OtherProducts.jsx";
import ProductsCta from "../components/products/ProductsCta.jsx";
import "./products.css";

export default function Products() {
  return (
    <>
      <ProductHero />
      <FeaturedProduct />
      <Available24Section />
      <OtherProducts />
      <ProductsCta />
    </>
  );
}
