import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="google" />
      </div>
      <nav>
        <li>About</li>
        <li>Courses</li>
        <li>Reviews</li>
      </nav>
    </div>
  );
};

export default Header;
