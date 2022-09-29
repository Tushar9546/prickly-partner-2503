// import { useParams, useSearchParams } from "react-router-dom";
import "../Styles/ProductDetailPage.css";

export const ProductDetailPage = ({
  id = 1,
  image1 = "https://www.jiomart.com/images/product/150x150/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg",
  image2 = "https://www.jiomart.com/images/product/600x600/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-1-202204281542.jpg",
  image3 = "https://www.jiomart.com/images/product/600x600/491551493/good-life-sugar-m-1-kg-legal-images-o491551493-p491551493-5-202204281543.jpg",
  name = "Good Life Sugar (M) 1 kg",
  mrp = 55.0,
  price = 46.0,
  discount = 50,
  discription = "Ethnic basket Women's Crepe Blue Color Ethnic Motif Printed Straight Kurti",
}) => {
  //   const { id } = useParams();
  //   const [searchParam] = useSearchParams();
  //   console.log();

  return (
    <div className="main-div">
      <div className="first-div">
        <div className="first-div-left">
          <div className="arrow">^</div>
          <div className="left-img">
            <img src={image1} alt="icon" width={"100px"} height="100px" />
          </div>
          <div className="left-img">
            <img src={image2} alt="icon" />
          </div>
          <div className="left-img">
            <img src={image3} alt="icon" />
          </div>
          <div className="arrow marginBtm">^</div>
        </div>
        <div className="first-div-middle">
          <div className="discount-div">
            <div className="discount">{discount} % OFF</div>
          </div>
          <div>
            <img src={image1} alt="ico" className="middle-img" />
          </div>
        </div>

        <div className="first-div-right">
          <h1>{discription}</h1>
          <h3>{name}</h3>
          <div className="price">
            <h1>₹ {price}</h1>
            <h3>M.R.P: ₹ {mrp}</h3>
          </div>
        </div>
      </div>
      <div>div 2</div>
      <div>div 2</div>
      <div>div 4</div>
      <div>div 5</div>
    </div>
  );
};
