import { Footer } from "../components/Footer";
import { Header2 } from "../components/Header2";


export const HomePage = () => {
  return (
    <div className="HomePage flex justify-content-between flex-column w-full h-screen">
      <Header2 />
      <h1>Conteudo principal</h1>
      <Footer />
    </div>
  );
};
