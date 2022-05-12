import Formulario from "./Formulario.js";
import Menu from "./Menu.js";

const Cadastro = () => {

    require("./App.css");
  
  
    return (
     <div>
         <Menu/>

        <div className="container">
         <Formulario/>
        </div>
     </div>
    );
  }
  
  export default Cadastro;