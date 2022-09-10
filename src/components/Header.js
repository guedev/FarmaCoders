import "/node_modules/primeflex/primeflex.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-content-around align-items-center bg-green-300 p-5">
      <h1>Aula de ROUTER DOM</h1>

      <Link to="/">
        <Button label="HomePage" className="p-button-sm" />
      </Link>
    </header>
  );
};
