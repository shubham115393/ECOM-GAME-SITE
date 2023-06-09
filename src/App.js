import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./components/main/main";
import Cart from "./components/cart/cart";
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/card" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;