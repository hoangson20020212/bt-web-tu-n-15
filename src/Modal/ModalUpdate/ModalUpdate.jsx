import React from 'react'
import './ModalUpdate.css'

const ModalUpdate = ({closeModal}) => {
  return (
    <div>
        <div>ModalUpdate</div>
    


        <button onClick={() => closeModal(false)}>Đóng</button>
    </div>
    
  )
}

export default ModalUpdate