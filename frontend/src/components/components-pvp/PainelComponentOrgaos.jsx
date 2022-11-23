import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// IMages
import IconAdd from "../../img/icons/person-add.svg";
import ListBox from './ListBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CadastroOrgao from '../../pages/private_pages/cadastro_orgao/Cadastro_Orgao';

function PainelComponentOrgaos() {

  const [doador, setDoador] = useState([
    {id:1, value: <ListBox value={'Francisco Alessandro Clemente SIlva'} /> }
  ]);

function handleAddDoador(){
  setDoador([
    ...  doador,
    {id:Math.random(), value: <ListBox/>}
  ]);
}

  return (
    <Container  fluid className='container_box' >
      <Row>
      <Col></Col>
        <Col md={{span:6, offset: 0}} className='actions_nav' >
            <Row>
                <Col md={{span:6, offset: 0}} className='actions_nav' onClick={handleAddDoador} >Orgãos</Col>
                <Col md={{span:1, offset: 4}} className='actions_nav' > <CadastroOrgao/> </Col>
            </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row >
      <Col></Col>
        {/* <Col md={{span:2, offset: 0}} className='resume_box'  >
                <h2>Resumo</h2>
                <p>Quantidade: </p>
                <p>Orgão: </p>
        </Col> */}
        <Col  md={{span:7, offset: 1}} className='box_painel' >
          <ul style={{'list-style':'none'}}>

          {doador.map(repo =>(
            <li key={repo.id}> {repo.value} </li>
          ))}
          </ul>
          

        </Col>
        <Col></Col>
      </Row>
    
    </Container>
  );
}

export default PainelComponentOrgaos;


