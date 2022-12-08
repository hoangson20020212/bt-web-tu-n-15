import React from 'react'
import './ModalDelete.css'

export const ModalDelete = ({closeModal}) => {

  return (
    <div>
        <div>ModalDelete</div>

        
    <button onClick={() => closeModal(false)}>Đóng</button>
    </div>
    
  )
}
