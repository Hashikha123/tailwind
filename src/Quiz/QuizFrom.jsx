import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

function QuizFrom() {
    const[modal,setModal]=useState(false)
  return (
    <div>
      <Modal
      size='md'
      isOpen={modal}
      toggle={()=>setModal(!modal)}
      >
        <ModalHeader
        toggle={()=>setModal(!modal)}
        >
            Select Players
        </ModalHeader>
        <ModalBody>
          <div className='flex'>
            <button className='p-2 bg-red-500 rounded-md'>2 Players</button>
            <button className='p-2 bg-red-500 rounded-md'>2 Players</button>
            <button className='p-2 bg-red-500 rounded-md'>2 Players</button>
            <button className='p-2 bg-red-500 rounded-md'>2 Players</button>

            
          </div>
        </ModalBody>
      </Modal>
      <button className='p-2 bg-green-700 text-white rounded-sm ' onClick={()=>setModal(true)}>Play Game</button>
    </div>
  )
}

export default QuizFrom
