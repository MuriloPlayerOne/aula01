const Menu = (props) => {

 const quantidade_jogos = props.quantidade_jogos

    require("./Menu.css");
    
    return(
        
        <div className="menu">
    
          <div className="img">
          <a href="#">
            <img src="https://logodownload.org/wp-content/uploads/2018/09/playstation-store-logo-2.png"/>
          </a>
          </div>
      
         

          <div>

            <a href="#"> Cadastro </a>
            
            <a href="#"> Login </a>

            <a href="#">
            <i class="fa-solid fa-cart-shopping"></i> <strong>{quantidade_jogos}</strong>
            </a>
            
            <a href="#"> <i class="fa-solid fa-magnifying-glass"></i></a>
          </div>  
          
        </div>
        
    );
}

export default Menu;