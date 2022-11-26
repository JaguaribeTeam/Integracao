import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import excluir from "../../img/icons/excluir.svg";
import { deleteOrgao } from '../../services/api';

function DeleteOrgao({id}) {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeOrgao = async () => {
      await deleteOrgao(id,token);
      handleClose();
  }

  return (
    <>
      <img src={excluir} alt="" onClick={handleShow}/>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir este orgão ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={removeOrgao}>
        Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteOrgao;