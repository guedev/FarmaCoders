import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { Cadastro } from "../Pages/Cadastro";

export const MyRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cadastro" element={<Cadastro />} />         
        </Routes>
      </Router>
    );
}