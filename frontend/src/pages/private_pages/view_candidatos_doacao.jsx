// POR ENQUANTO ESTAPÁGINA ESTÁ FAZENDO O RETORNO DOS USUÁRIOS
// 

import React from 'react';
import MenuPrivate from '../../components/components-pvp/menu';
import { returnUser } from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';

import edit from "../../img/icons/edit.svg";
import DeleteList from '../../components/components-pvp/DeleteList';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ViewPainelDoadores = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect (() => {
    async function loadUser(){

      const response = await returnUser();
      setUsuarios(response);
      console.log(response);
    } loadUser();;
}, []);

    return ( 
      <div className="main">
        <div className="content">

            <MenuPrivate/>

        
    <Container  fluid className='container_box' >
      <Row>
      <Col></Col>
        <Col md={{span:6, offset: 0}} className='actions_nav' >
            <Row>
                <Col md={{span:6, offset: 0}} className='actions_nav'>Candidatos a doação </Col>
                <Col md={{span:1, offset: 4}} className='actions_nav' >  </Col>
            </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row >
      <Col></Col>
        <Col  md={{span:7, offset: 1}} className='box_painel' >
          <ul style={{'list-style':'none'}}>

          {usuarios.map(user => (
            <div className="listBox">
              <div className="informations">
                <p>Nome:{user.nome}</p>
                <p>Tipo Sanguineo: {user.tipo_sanguineo}</p>
                <p>Cidade: {user.cidade}</p>
                <p>Estado: {user.estado}</p>
            </div>
            <div className="btnFunctions">
                <img src={edit} alt="" />
                <DeleteList/>
        </div>
          
              </div>
          ))}

          </ul>
          
        </Col>
        <Col></Col>
      </Row>
    
    </Container>


        </div>

      </div>
     );
}
 
export default ViewPainelDoadores;