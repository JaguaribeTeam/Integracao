
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Button from '../../../components/Buttons';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { createUser, editUser, returnUserCPF } from '../../../services/api';

import IconAdd from "../../../img/icons/person-add.svg";

import edit from "../../../img/icons/edit.svg";
import { useEffect } from 'react';


const EditUser =  ({cpfUser}) => {

    const [nome,setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email,setEmail] = useState("");
    const [tipo_sanguineo, setTipoSanguineo] = useState("");
  //   const [telefone, setTelefone] = useState("");
    const [dt_nascimento, setDataNascimento] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setRua] = useState("");
    const [complemento, setComplemento] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [senha, setPassword] = useState("");
    const token = localStorage.getItem("token");


    const [lgShow, setLgShow] = useState(false);



    

    const handleShow = async (e) =>{
        e.preventDefault(); 
       const response = await editUser ( cpfUser,token,cep,logradouro, Number(numero) ,complemento,bairro,cidade,estado,tipo_sanguineo);
    // const response = await returnUserCPF(cpfUser);
        console.log(response);
        // setBairro('meu bairro');
        // setLgShow(false);
    }

    
    return (              
        <div>
            <img src={edit} alt="" className='imgsvg' onClick={() => setLgShow(true)} />

        {/* Criação do modal */}

                <Modal centered
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Alterar Informações
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

            {/* A partir daqui é criação do formulário  */}
                    <Form className='formStrap' onSubmit={handleShow} >

                    <Row className="mb-1">

                    <Form.Group as={Col} className="mb-1" controlId="formGridCadTelefone">
                        <Form.Label>Número</Form.Label>
                        <Form.Control  onChange={(e) => setNumero(e.target.value) }/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCadCep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control  onChange={(e) => setCep(e.target.value) } />
                        </Form.Group>


                    </Row>
                    

                    <Row className="mb-1">


                        <Form.Group as={Col} controlId="formGridCadRua">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control  onChange={(e) => setRua(e.target.value) } />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control  onChange={(e) => setComplemento(e.target.value) } />
                        </Form.Group>


                        </Row>

                        <Form.Group as={Col} controlId="formGridCadBairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control  onChange={(e) => setBairro(e.target.value) }/>
                        </Form.Group>

                        <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCadEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control  onChange={(e) => setEstado(e.target.value) }/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadCidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control  onChange={(e) => setCidade(e.target.value) }/>
                        </Form.Group>


                    </Row>
      <Button variant="primary" type="submit" className='btn_mp_green' value='Cadastrar' ></Button>
    </Form>

                    </Modal.Body>
                </Modal>
            </div>
    );
}
 
export default EditUser;