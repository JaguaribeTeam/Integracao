
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Button from '../../../components/Buttons';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import IconAdd from "../../../img/icons/person-add.svg";


const CadastroUsuarioDoador = () => {

    const [cpf, setCPF] = useState('');
    const [nome, setNome] = useState('');
    const [tpsanguineo, setTipoSanguineo ] = useState('');
    const [dtnascimento, setDataNascimento] = useState('');
    const [orgao, setOrgao] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento ] = useState('');
    const [ncasa, setNCasa ] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade ] = useState('');




    const handleShow = (e) =>{
        e.preventDefault(); 
        console.log(nome, tpsanguineo);
    }

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
                        Cadastro usuário
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

            {/* A partir daqui é criação do formulário  */}
                    <Form className='formStrap' onSubmit={handleShow} >
                        
                    <Row className="mb-1">

                    <Form.Group as={Col} controlId="formGridCadCPF">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control  onChange={(e) => setNome(e.target.value) } />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control  onChange={(e) => setCPF(e.target.value) } />
                        </Form.Group>

                    </Row>

                    <Row className="mb-1">
                        
                        <Form.Group as={Col} controlId="formGridCadTipoSang">
                        <Form.Label>Tipo Sanguineo</Form.Label>
                        <Form.Select defaultValue="Choose..."  onChange={(e) => setTipoSanguineo(e.target.value) }>
                            <option></option>
                            <option>A</option>
                            <option>B</option>
                            <option>AB</option>
                            <option>O</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadDtNasc">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control  onChange={(e) => setDataNascimento(e.target.value) } />
                        </Form.Group> 
                    </Row>

                    <Row className="mb-1">

                    <Form.Group as={Col} className="mb-1" controlId="formGridCadTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control  onChange={(e) => setTelefone(e.target.value) }/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCadCep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control  onChange={(e) => setCep(e.target.value) } />
                        </Form.Group>

                    <Form.Group controlId="formGridCadRua">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control  onChange={(e) => setRua(e.target.value) }/>
                    </Form.Group>

                    </Row>
                    

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCadComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control  onChange={(e) => setComplemento(e.target.value) } />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadNCasa">
                        <Form.Label>N° Casa</Form.Label>
                        <Form.Control  onChange={(e) => setNCasa(e.target.value) } />
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
 
export default CadastroUsuarioDoador;