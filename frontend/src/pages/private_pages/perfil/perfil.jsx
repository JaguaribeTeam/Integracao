import React from 'react';
import MenuPrivate from '../../../components/components-pvp/menu';

import "./user.css";

import img from "../../../img/Smiley face-amico(1).png"
import { Link } from 'react-router-dom';

const UserPerfil = () => {

    const usuario = localStorage.getItem("user");

    return ( 
        <div className="main">
            <MenuPrivate/>  
            <div className="content">
                <div className="contentUser">

                    <div className="photoDesc">
                        <div className="infoUser">
                            {/* utilizar COMPONENT AQUI */}
                            <h2>Seja Bem Vindo {usuario}</h2>
                            {/* <p>Tipo de usuário: </p>  */}
                        </div>
                        <img src={img} width='350px'/>
                    </div> 

                    <div className="userActions">
                        <h1>Ações</h1>
                        <div className="gridCards">
                            <Link to={'/painel-doadores'} style={{textDecoration: 'none'}}>
                                <div className="cards">
                                    <h4>Doadores</h4>
                                    <p>Visualização, edição e cadastro de doadores</p>
                                </div>
                            </Link>
                            <Link to={'/view-receptores'} style={{textDecoration: 'none'}}>
                                <div className="cards">
                                <h4>Receptores</h4>
                                    <p>Visualização, edição e cadastro de Receptores</p>
                                </div>
                            </Link>
                        </div>
                        <div className="gridCards" >
                        <Link to={'/view-orgaos'} style={{textDecoration: 'none'}}> 
                            <div className="cards">
                            <h4>Órgãos</h4>
                                <p>Visualização, edição e cadastro de Órgãos</p>
                            </div>
                        </Link>
                        <Link to={'/view-instituicao'} style={{textDecoration: 'none'}}>
                            <div className="cards">
                            <h4>Instituição</h4>
                                <p>Visualização, edição e cadastro de Instituição</p>
                            </div>
                        </Link>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
     );
}
 
export default UserPerfil;