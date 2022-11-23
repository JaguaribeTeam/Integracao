import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';


// IMages
import ListBox from './ListBox';
import { useEffect, useState } from 'react';
import CadastroUsuarioDoador from '../../pages/private_pages/cadastro_usuario/Cadastro_Usuario';
import { returnUser } from '../../services/api';

function PainelComponentDoadores() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect (() => {
    async function loadUser(){
      const response = await returnUser();
      setUsuarios(response.data);
      // console.log(response.data);
    } loadUser();;
}, []);


  // const [doador, setDoador] = useState([
  //   {id:1, value: <ListBox/> }
  // ]);

// function handleAddDoador(){
//   setDoador([
//     ...  doador,
//     {id:Math.random(), value: <ListBox/>}
//   ]);
// }

  return (
    <Container  fluid className='container_box' >
      <Row>
      <Col></Col>
        <Col md={{span:6, offset: 0}} className='actions_nav' >
            <Row>
                <Col md={{span:6, offset: 0}} className='actions_nav'>Candidatos a doação </Col>
                <Col md={{span:1, offset: 4}} className='actions_nav' > <CadastroUsuarioDoador /> </Col>
            </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row >
      <Col></Col>



        <Col  md={{span:7, offset: 1}} className='box_painel' >
          <ul style={{'list-style':'none'}}>

            {usuarios.map(user => {
             <li key={user.id}>{user.nome}</li> 
            })} 

          </ul>
          
        </Col>
        <Col></Col>
      </Row>
    
    </Container>
  );
}

export default PainelComponentDoadores;


