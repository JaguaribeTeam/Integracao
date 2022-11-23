
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Button from '../../../components/Buttons';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import IconAdd from "../../../img/icons/person-add.svg";


const CadastroInstituicao = () => {

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email,setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [lgShow, setLgShow] = useState(false);
    
    return (              
        <div>
            
            <img src={IconAdd} alt="" className='imgsvg' onClick={() => setLgShow(true)} />

        {/* Criação do modal */}

                <Modal centered
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastro de Instituição
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

            {/* A partir daqui é criação do formulário  */}
                    <Form className='formStrap'>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCadCPNJ">
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control onChange={(e) => setCnpj(e.target.value) } />
                        </Form.Group>

                    </Row>

                    <Row className="mb-1">
                        
                        <Form.Group as={Col} className="mb-1" controlId="formGridCadTelefone">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control onChange={(e) => setNome(e.target.value) }/>
                    </Form.Group>


                        <Form.Group as={Col} controlId="formGridCadDtNasc">
                        <Form.Label>Email</Form.Label>
                        <Form.Control  onChange={(e) => setEmail(e.target.value) }/>
                        </Form.Group>  
                    </Row>

                    <Row className="mb-1">

                    <Form.Group as={Col} className="mb-1" controlId="formGridCadTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control onChange={(e) => setTelefone(e.target.value) }/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCadCep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control onChange={(e) => setCep(e.target.value) }/>
                        </Form.Group>

                    <Form.Group controlId="formGridCadLogradouro">
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control onChange={(e) => setLogradouro(e.target.value) }/>
                    </Form.Group>

                    </Row>
                    

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCadComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control onChange={(e) => setComplemento(e.target.value) } />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadNCasa">
                        <Form.Label>Número</Form.Label>
                        <Form.Control onChange={(e) => setNumero(e.target.value) }/>
                        </Form.Group>

                        </Row>

                        <Form.Group as={Col} controlId="formGridCadBairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control onChange={(e) => setBairro(e.target.value) }/>
                        </Form.Group>

                        <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCadEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control onChange={(e) => setEstado(e.target.value) } />
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
 
export default CadastroInstituicao;