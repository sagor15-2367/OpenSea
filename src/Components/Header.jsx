import "../Styles/Header.css";
import logo from "../assets/Logomark-White.png";
import searchbar from "../assets/magnifying-glass.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logoBox">
        <img className="logo" src={logo} alt="#" />
        <h1>OpenSea</h1>
        <div className="bar"></div>
        <div className="drops">
          <p>Drops</p>
          <p>Status</p>
        </div>
      </div>

      <div className="searchbar">
        <img src={searchbar} alt="#" />

        <input
          className="searchinput"
          type="text"
          placeholder="Search items,accounts and nft’s"
        />
      </div>
      <div className="paymentbar">
        <p>Payment Method</p>
        <div className="Paymentbar"></div>
        <img src={profile} alt="#" />
      </div>
      <div className="cartbar">
        <img src={cart} alt="#" />
      </div>
    </div>
  );
};

export default Header;
