import "./hero.css";
import PavingImg from "../../assets/images/hero_img_paving.png";
import MarbleImg from "../../assets/images/hero_img_marble.png";
import { scrollToTop } from "../../utils/useScrollToTop";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero_section">
      <div className="wrapper">
        <div className="left_side">
          <p>Sizga kerakli mahsulot albatta bor!</p>
          <h1>
            <b>TOSHBOZOR</b> bilan mukammal tashqi ko’rinishni kashf eting
          </h1>
          <button
            onClick={() => {
              navigate("/products");
              scrollToTop(700);
            }}
            className="hero_order_btn"
          >
            Narxlarni bilish
          </button>
        </div>
        <div className="right_side">
          <img className="hero_paving_img" src={PavingImg} alt="" />
          <img className="hero_marble_img" src={MarbleImg} alt="" />
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/products");
          scrollToTop(900);
        }}
        className="hero_order_btn_mobile"
      >
        Narxlarni bilish
      </button>
    </section>
  );
};

export default Hero;
