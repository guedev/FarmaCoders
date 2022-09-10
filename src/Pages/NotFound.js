import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header2 } from "../components/Header2";

export const NotFound = () => {
  return (
    <div className="HomePage flex justify-content-between flex-column w-full h-screen">
      <Header2 />
      <h1>Esta pagina não existe</h1>
      <Link to="/">
        <button>Voltar para HOME</button>
      </Link>

      <Footer />
    </div>
  );
};
