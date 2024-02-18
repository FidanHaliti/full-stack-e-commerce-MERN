const BrandItem = ({ imageUrl }) => {
  return (
    <li className="brand-item">
      <a href="#">
      <img src={imageUrl} alt="" />
       
      </a>
    </li>
  );
};

export default BrandItem;
