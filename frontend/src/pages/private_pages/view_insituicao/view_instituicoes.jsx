import React from 'react';
import MenuPrivate from '../../../components/components-pvp/menu';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteList from '../../../components/components-pvp/DeleteList';

import edit from "../../../img/icons/edit.svg";
import { useState, useEffect } from 'react';
import { returnInstituicao } from '../../../services/api';



const ViewInstituicoes = () => {

    const [instituicao, setInstituicao] = useState([]);

    useEffect(() => {
        async function loadInstituicao(){
            const response = await returnInstituicao();
            setInstituicao(response);
          } loadInstituicao();;
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
                <Col md={{span:6, offset: 0}} className='actions_nav'>Orgãos Presentes no Sistema </Col>
                <Col md={{span:1, offset: 4}} className='actions_nav' >  </Col>
            </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row >
      <Col></Col>
        <Col  md={{span:7, offset: 1}} className='box_painel' >
          <ul style={{'list-style':'none'}}>

          {instituicao.map(orgao => (
            <div className="listBox">
              <div className="informations">
                <p>Nome: {orgao.nome}</p>
                
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
 
export default ViewInstituicoes;