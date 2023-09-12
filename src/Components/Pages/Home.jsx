import img1 from "../../assets/img1.png";
import { AiFillAndroid,AiFillApple } from 'react-icons/ai';
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <p>Nourish your inner skill with</p>
        <span className="google">
          <span className="span1">K</span>
          <span className="span2">o</span>
          <span className="span3">o</span>
          <span className="span4">g</span>
          <span className="span5">l</span>
          <span className="span6">e</span>
        </span>
        <span className="summary">
          Choose your favorite course and start learning anytime anywhere with
          koogle
        </span>
        <div className="buttons">
          <div className="box box1"><AiFillAndroid/>Android</div>
          <div className="box box2"><AiFillApple/>Apple</div>
        </div>
      </div>
      <div className="image">
        <img src={img1} alt="home image" />
      </div>
    </div>
  );
};

export default Home;
