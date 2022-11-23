import React, { useState , useContext} from "react";
import '../fonts/FredokaOne-Regular.ttf';
import '../css/index.css';

import { AuthContext } from "../contexts/auth";
import Button from "../components/Buttons";
import Logo from "../img/logo3d.png";
// import Logo2 from "./img/logoRed.png";


function LoginPage(){

    const {autenticado, login} = useContext(AuthContext);

   
        const [email, setEmail] = useState("");
        const [ password, setPassword] = useState("");

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log("submit", {email,password} );
            login(email,password);
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
                        <input type='email' className={'big_input_text'} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input type='password' className={'big_input_text'} placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            
                            <p className="p_box_">Esqueci minha senha</p>
                            <Button value={'Logar'} type={'submit'} className={'btn_Login'} />
                            <p className="p_box_">Não tem uma conta ? <a href="#">Registre-se</a></p>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;