import React from 'react';
import "../../pages/private_pages/main.css";

import edit from "../../img/icons/edit.svg";
import DeleteUser from './DeleteUser';



const ListBox = (props) => {
    return ( 
        <div className="listBox">
            <div className="informations">
                <div className="sup_informations">
                    <p>Nome: {props.value} </p>
                    <p>Id: 12345</p>
                </div>
                <div className="sub_informations">
                    <p>Órgão: Rin</p>
                    <p>Cidade: Fortaleza</p>
                    <p>Estado: Ceará</p>
                    <p>Idade: 50 anos</p>
                </div>
            </div>
            <div className="btnFunctions">
                <img src={edit} alt="" />
                <DeleteUser/>
            </div>
        </div>
     );
}
 
export default ListBox;