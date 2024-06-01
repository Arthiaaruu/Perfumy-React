import one from "../assests/images/one.jpg"
import Two from "../assests/images/two.jpg"
import Three from "../assests/images/three.jpg"
function Products() {
    return (
      <div className="products">
        <div className="box">
          <img src={one} alt="perfume1"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={Two} alt="perfume2"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={Three} alt="perfume3"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }
export default Products  