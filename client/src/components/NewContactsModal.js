import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';

export default function NewContactsModal({ closeModal }) {

   const idRef = useRef();
   const nameRef = useRef();
   const { createContact } = useContacts()

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(idRef.current.value);
      // createContact(idRef.current.value, nameRef.current.value)
      closeModal();
   }
   return (
      <>
         <Modal.Header closeButton> Create Contact</Modal.Header>
         <Modal.Body>
            <Form onSubmit={handleSubmit}>
               <Form.Group>
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="text" ref={idRef} key="id" required />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} required />
               </Form.Group>
               <Button variant="primary" type="submit">Create Contacts</Button>
            </Form>
         </Modal.Body>
      </>
   )
}
