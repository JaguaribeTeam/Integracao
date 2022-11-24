import React, {useEffect, useState} from 'react';
import MenuPrivate from '../../../components/components-pvp/menu';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CadastroUsuarioDoador from '../cadastro_usuario/Cadastro_Usuario';
import { returnUser } from '../../../services/api';
import DeleteUser from '../../../components/components-pvp/DeleteUser';

import edit from "../../../img/icons/edit.svg";


const ViewReceptores = () => {

    const [receptores, setReceptores] = useState([]);

    useEffect (() => {
      async function loadUser(){
        const response = await returnUser();
        setReceptores(response);
      } loadUser();;
  }, []);

    return ( 
        <div className="main">
            <div className="content">
                {/* <div className="box"> */}
                    <MenuPrivate/>
                    <Container  fluid className='container_box' >
      <Row>
      <Col></Col>
        <Col md={{span:6, offset: 0}} className='actions_nav' >
            <Row>
                <Col md={{span:6, offset: 0}} className='actions_nav'>Receptores </Col>
                <Col md={{span:1, offset: 4}} className='actions_nav' > <CadastroUsuarioDoador /> </Col>
            </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row >
      <Col></Col>



        <Col  md={{span:7, offset: 1}} className='box_painel' >
          <ul style={{'list-style':'none'}}>

          {receptores.map(user => (
            <div className="listBox">
              <div className="informations">
                <p>Nome:{user.nome}</p>
                <p>Tipo Sanguineo: {user.tipo_sanguineo}</p>
                <p>Cidade: {user.cidade}</p>
                <p>Estado: {user.estado}</p>
            </div>
            <div className="btnFunctions">
                <img src={edit} alt="" />
                <DeleteUser cpf={user.cpf}/>
        </div>
          
              </div>
          ))}

          </ul>
          
        </Col>
        <Col></Col>
      </Row>
    
    </Container>
                </div>
            {/* </div> */}
        </div>
     );
}
 
export default ViewReceptores;