import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';


// IMages
import ListBox from './ListBox';
import { useState } from 'react';

import CadastroInsituicao from '../../pages/private_pages/cadastro_insituicao/Cadastro_Instituicoes';

function PainelComponentInstituicao() {

  const [doador, setDoador] = useState([
    {id:1, value: <ListBox/> }
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
                <Col md={{span:6, offset: 0}} className='actions_nav' onClick={handleAddDoador} >Instituições </Col>
                <Col md={{span:1, offset: 4}} className='actions_nav' > <CadastroInsituicao /> </Col>
            </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row >
      <Col></Col>

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

export default PainelComponentInstituicao;


