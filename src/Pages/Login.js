import { Footer } from "../components/Footer";
import { Header2 } from "../components/Header2";

export const LoginPage = () => {
  return (
    <div className="HomePage flex justify-content-between flex-column w-full h-screen">
      <Header2 />
      <div>
        <h1>Aqui é a sua area de login</h1>
      </div>

      <Footer />
    </div>
  );
};
