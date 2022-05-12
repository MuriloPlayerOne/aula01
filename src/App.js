import React from 'react';

import Inicio from './Inicio.js';
import Cadastro from './Cadastro.js';


const App = () => {

  require("./App.css");

  const [tela, mudaTela] = React.useState(0);

  return (
   <div>

      {
        tela == 0
        
        
        
        
        
        
        
        
        ? <Inicio/> : <Cadastro/>
      }


      
   </div> 
  );
}

export default App;
