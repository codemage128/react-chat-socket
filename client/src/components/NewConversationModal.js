import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function NewConversationModal({ closeModal }) {

   const idRef = useRef();
   const nameRef = useRef();

   const handleSubmit = (event) => {
      event.preventDefault();
      // createConversation(idRef.current.value, nameRef.current.value)
      closeModal();
   }
   return (
      <>
         <Modal.Header closeButton> Create Conversation</Modal.Header>
         <Modal.Body>
            <Form onSubmit={handleSubmit}>
               <Form.Group>
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="text" ref={idRef} required />
               </Form.Group>
               <Form.Group>
                  <Form onSubmit={handleSubmit}>
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="text" ref={nameRef} required />
                  </Form>
               </Form.Group>
               <Button variant="primary" type="submit">Create Conversation</Button>
            </Form>
         </Modal.Body>
      </>
   )
}
