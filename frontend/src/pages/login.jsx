import React, { useState , useContext} from "react";
import '../fonts/FredokaOne-Regular.ttf';
import '../css/index.css';

import { AuthContext } from "../contexts/auth";
import Button from "../components/Buttons";
import Logo from "../img/logo3d.png";
import { Link } from "react-router-dom";
// import Logo2 from "./img/logoRed.png";


function LoginPage(){

    const {autenticado, login} = useContext(AuthContext);

   
        const [email, setEmail] = useState("");
        const [ senha, setPassword] = useState("");

       

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log("submit", {email,senha} );
            login(email,senha);
        }
    


    return(
        <div className="main">
            <div className="content">
            <div className="spacement">
                <div className="InteriorBox">
                    <div className="LgTxt">
                    {/* <p>{String(autenticado)}</p> */}
                        <img src={Logo}/>
                        <p className="TextLogin">Faça seu login na plataforma</p>
                    </div>
                
                 <form onSubmit={handleSubmit}>
                    <div className="box_log" >
                        <input type='text' className={'big_input_text'} placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input type='password' className={'big_input_text'} placeholder='Senha' value={senha} onChange={(e) => setPassword(e.target.value)}></input>
                            
                            <p className="p_box_">Esqueci minha senha</p>
                            <Button value={'Logar'} type={'submit'} className={'btn_Login'} />
                            <p className="p_box_">Não tem uma conta ? <Link to="/cadastro">Registre-se</Link></p>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;