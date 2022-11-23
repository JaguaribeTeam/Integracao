// Esta página será um modal


import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Button from '../../../components/Buttons';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import IconAdd from "../../../img/icons/person-add.svg";


const CadastroOrgao = () => {
    
    const [orgao, setOrgao] = useState('');
    const [doador, setDoador] = useState('');
    const [idadeDoador, setIdadeDoador] = useState('');
    const [medico, setMedico] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [data, setData] = useState('');
    const [motivo, setMotivo] = useState('');


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
                        Cadastro de Órgãos
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

            {/* A partir daqui é criação do formulário  */}
                    <Form className='formStrap'>
                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCadOrgao">
                        <Form.Label>Orgão</Form.Label>
                        <Form.Control onChange={(e)=> setOrgao(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadDtNasc">
                        <Form.Label>Doador</Form.Label>
                        <Form.Control onChange={(e)=> setDoador(e.target.value)}/>
                        </Form.Group>  
                    </Row>

                    <Row className="mb-1">

                    <Form.Group as={Col} className="mb-1" controlId="formGridCadTelefone">
                        <Form.Label>Idade do Doador</Form.Label>
                        <Form.Control onChange={(e)=> setIdadeDoador(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCadCep">
                        <Form.Label>Médico Responsável</Form.Label>
                        <Form.Control onChange={(e)=> setMedico(e.target.value)}/>
                        </Form.Group>

                    <Form.Group controlId="formGridCadRua">
                        <Form.Label>Instituição Responsável</Form.Label>
                        <Form.Control onChange={(e)=> setInstituicao(e.target.value)}/>
                    </Form.Group>

                    </Row>
                    

                    <Row className="mb-1">
                        <Form.Group as={Col} controlId="formGridCadComplemento">
                        <Form.Label>Data</Form.Label>
                        <Form.Control onChange={(e)=> setData(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCadNCasa">
                        <Form.Label>Motivo da doação</Form.Label>
                        <Form.Control onChange={(e)=> setMotivo(e.target.value)} />
                        </Form.Group>

                        </Row>
                    

      <Button variant="primary" type="submit" className='btn_mp_green' value='Cadastrar' ></Button>
    </Form>

                    </Modal.Body>
                </Modal>
            </div>
    );
}
 
export default CadastroOrgao;