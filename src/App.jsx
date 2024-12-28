import Catagories from "./Components/Catagories";
import Header from "./Components/Header";
import Ranking from "./Components/Ranking";
import Trending from "./Components/Trending";
import Cart from "./Components/catagoriesCart";

const App = () => {
  return (
    <div>
      <Header />
      <Catagories />
      <Cart />
      <Trending />
      <Ranking />
      <h2>Hello Open Sea...!!</h2>
    </div>
  );
};

export default App;
