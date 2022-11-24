import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import excluir from "../../img/icons/excluir.svg";
import { deleteOrgao } from '../../services/api';

function DeleteOrgao({id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeUser = async () => {
      await deleteUser(id);
      handleClose();
  }

  return (
    <>
      <img src={excluir} alt="" onClick={handleShow}/>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir este usuário ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={removeUser}>
        Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteList;