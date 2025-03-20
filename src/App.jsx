import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import WhatsAppButton from "./components/WhatsappButton";
import Box from "./pages/Box";
import Classiques from "./pages/Classiques";
import Contact from "./pages/Contact";
import Courtes from "./pages/Courtes";
import Crochet from "./pages/Crochet";
import French from "./pages/French";
import French1 from "./pages/French1";
import French2 from "./pages/French2";
import French3 from "./pages/French3";
import French4 from "./pages/French4";
import Home from "./pages/Home";
import Longues from "./pages/Longues";
import Nkotless from "./pages/Nkotless";
import Nkotless1 from "./pages/Nkotless1";
import Nkotless2 from "./pages/Nkotless2";
import Nkotless3 from "./pages/Nkotless3";
import Nkotless4 from "./pages/Nkotless4";
import Passion from "./pages/Passion";
import Passion1 from "./pages/Passion1";
import Passion2 from "./pages/Passion2";
import Passion3 from "./pages/Passion3";
import Passion4 from "./pages/Passion4";
import PreEtirees from "./pages/PreEtirees";
import Reserver from "./pages/Reserver";
import Services from "./pages/Products";
import Soft from "./pages/Soft";
import Soft1 from "./pages/Soft1";
import Soft2 from "./pages/Soft2";
import Soft3 from "./pages/Soft3";
import Twist from "./pages/Twist";
import TwistClassique from "./pages/TwistClassique";
import TwistCourt from "./pages/TwistCourt";
import TwistLong from "./pages/TwistLong";
const App = () => {
  return (
    <BrowserRouter>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/twistCourt" element={<TwistCourt />} />
        <Route path="/twistLong" element={<TwistLong />} />
        <Route path="/knotless" element={<Nkotless />} />
        <Route path="/nkotless1" element={<Nkotless1 />} />
        <Route path="/nkotless2" element={<Nkotless2 />} />
        <Route path="/nkotless3" element={<Nkotless3 />} />
        <Route path="/nkotless4" element={<Nkotless4 />} />
        <Route path="/crochet" element={<Crochet />} />
        <Route path="/soft" element={<Soft />} />
        <Route path="/passion" element={<Passion />} />
        <Route path="/soft1" element={<Soft1 />} />
        <Route path="/soft2" element={<Soft2 />} />
        <Route path="/soft3" element={<Soft3 />} />
        <Route path="/passion1" element={<Passion1 />} />
        <Route path="/passion2" element={<Passion2 />} />
        <Route path="/passion3" element={<Passion3 />} />
        <Route path="/passion4" element={<Passion4 />} />
        <Route path="/french" element={<French />} />
        <Route path="/french1" element={<French1 />} />
        <Route path="/french2" element={<French2 />} />
        <Route path="/french3" element={<French3 />} />
        <Route path="/french4" element={<French4 />} />
        <Route path="/boxbraids" element={<Box />} />
        <Route path="/classiques" element={<Classiques />} />
        <Route path="/courtes" element={<Courtes />} />
        <Route path="/twistClassique" element={<TwistClassique />} />
        <Route path="/longues" element={<Longues />} />
        <Route path="/preEtirees" element={<PreEtirees />} />
        <Route path="/twist" element={<Twist />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="/services" element={<Services />} />
        <Route path="/produit/:id" element={<ProductDetails />} />
      </Routes>
   <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
