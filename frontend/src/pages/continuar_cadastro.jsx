import React, {useState} from 'react';
import Button from '../components/Buttons';
import Don from '../img/logoWhite.png';



// React Strap
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



const ContinuarCadastro = () => {

  const [name,setName] = useState();
  const [email,setEmail] = useState();

  const handleSubmit = ({name, email}) =>{
     console.log("dados continuação",{name, email})

     setName(name);
     setEmail(email);
     
  }



    return ( 
        <div className="main">
             <Link to={'/'}>  <img src={Don} className='lgDon'  style={{width:'15rem'}}/> </Link>

            <div className="content">

<div className="box_cad">

    <Form className='formStrap' onSubmit={handleSubmit} >
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

      </Row>

      <Row className="mb-1">
        
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Tipo Sanguineo</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option></option>
            <option>A</option>
            <option>B</option>
            <option>AB</option>
            <option>O</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control />
        </Form.Group>  
      </Row>

      <Row className="mb-1">

      <Form.Group className="mb-1" controlId="formGridAddress1">
        <Form.Label>Telefone</Form.Label>
        <Form.Control/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>CEP</Form.Label>
          <Form.Control />
        </Form.Group>

      </Row>
      <Form.Group className="mb-1" controlId="formGridAddress2">
        <Form.Label>Rua</Form.Label>
        <Form.Control />
      </Form.Group>

      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Complemento</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>N° Casa</Form.Label>
          <Form.Control />
        </Form.Group>

        </Row>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Bairro</Form.Label>
          <Form.Control />
        </Form.Group>

        <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Estado</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>

      </Row>

      <Button variant="primary" type="submit" className='btn_mp_green' value='Cadastrar' ></Button>
    </Form>

            </div>
        </div>
    </div>
     );
}
 

export default ContinuarCadastro;