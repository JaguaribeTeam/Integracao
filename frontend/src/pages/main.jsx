import React from 'react';
import heartWhite from "../img/heartWhite.png";
import donGreen from "../img/donGreen.png";
import Button from '../components/Buttons';
import { Link } from 'react-router-dom';

    const MainPage = () => {
        return ( 
            <div className='main'>
                <div className="header">
                    <img src={heartWhite} alt="" />
                    <p>Blog</p>
                    <p>Contato</p>

                    <p>Entrar</p>
                    <Link to={'/perfil'} style={{color:'white'}}><p>Perfil</p></Link>
                </div>
                <div className="content">
                <div className="contentMainPage">
                    <div className="leftcontent">
                    <img src={donGreen} alt="" />
                    <p className='first_left_p'>A comunidade que compartilha <label>vida.</label></p>
                    <p>Informe-se sobre a doação de órgãos, doadores, receptores e lugares mais próximos para viabilizar esse ato de amor.</p>
                    </div>

                    <div className="rightcontent">
                    <Link to={'/cadastro'}> <Button value={'Quero fazer parte'} className={'btn_mp_green'}/> </Link>
                       <Link to={'/login'}> <Button value={'Entrar'} className={'btn_mp_white'}/></Link>
                    </div>

                </div>
                    <div className="footer">
                        <div className="footer_center_content">
                                <label>Doadores</label>
                                <p>A cada 1M de brasileiros, menos de 20 são doadores</p>
                            </div>
                        <div className="footer_center_content">
                            <label>Receptores</label>
                            <p>Mais de 50.000 pessoas esperam na fila de transplante</p>
                        </div>
                        <div className="footer_center_content">
                            <label>Transplantes</label>
                            <p>Queda de 29% de transplatadores no Brasil durante a pandemia de  COVID-19</p>
                        </div>
                        
                    </div>
                </div>
<footer></footer>

            </div>

         );
    }
     
    export default MainPage;