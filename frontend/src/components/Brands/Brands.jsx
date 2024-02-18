import BrandItem from "./BrandItem";
import "./Brands.css";

const Brands = () => {
  const brandsData = [
    { id: 1, imageUrl: "/img/brands/brand1.png" },
    { id: 2, imageUrl: "/img/brands/brand2.png" },
    { id: 3, imageUrl: "/img/brands/brand3.png" },
    { id: 3, imageUrl: "/img/brands/brand4.png" },
    { id: 3, imageUrl: "/img/brands/brand5.png" },
    // Add more brand data as needed
  ];
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
        {brandsData.map((brand) => (
            <BrandItem key={brand.id} imageUrl={brand.imageUrl} />
          ))}
         
        </ul>
      </div>
    </section>
  );
};

export default Brands;
