import Style from "./Women.module.css";

export const WomenProductCardPage = ({
  title,
  price,
  image,
  detail,
  discount,
}) => {
  return (
    <div className={Style.Cart_div}>
      <div>
        <div
          style={{
            backgroundColor: "red",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {discount} % OFF
        </div>
      </div>
      <img src={image} alt="icon" width="200px" height="300px" />
      <h5>
        {title} {detail}
      </h5>
      <h4>$ {price}</h4>
    </div>
  );
};
