import React from 'react';
import { useEffect } from 'react';
import MenuPrivate from '../../../components/components-pvp/menu';
import { returnOrgao } from '../../../services/api';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteUser from '../../../components/components-pvp/DeleteUser';

import edit from "../../../img/icons/edit.svg";
import { useState } from 'react';

const ViewListOrgaos = () => {

  
    const userBool = localStorage.getItem("admin");
    const [orgao, setOrgao] = useState([]);

    useEffect(() => {
        async function loadOrgao(){
            const response = await returnOrgao();
            setOrgao(response);
          } loadOrgao();;
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
          <ul style={{'listStyle':'none'}}>

          {orgao.map(orgao => (
            <div className="listBox">
              <div className="informations">
                <p>Nome: {orgao.nome}</p>
            </div>
            <div className="btnFunctions">
            {userBool !== "false" && ( 
              <>
              <img src={edit} alt="" />
              <DeleteUser/>
              </>

            )}
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
 
export default ViewListOrgaos;