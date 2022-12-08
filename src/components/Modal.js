

// import React, { forwardRef, useImperativeHandle } from 'react';
// import './Modal.css';
// import DaumPostCode from 'react-daum-postcode';


// const Modal = (setModalOpen) => {

//     const closeModal = (setModalOpen) => {
//         setModalOpen(false);
//     };

//     const handleComplete = (data) => {
//         let fullAddress = data.address;
//         let extraAddress = '';
//         if (data.addressType === 'R') {
//             if (data.bname !== '') {
//                 extraAddress += data.bname;
//             }
//             if (data.buildingName !== '') {
//                 extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
//             }
//             fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
//         }
//         //fullAddress -> 전체 주소반환
//     }

//     return (
//         <div className="modal_container">
//             <button 
//                 className="modal_close_btn" 
//                 onClick={closeModal}>

//             X </button>
//             <DaumPostCode onComplete={handleComplete} className="post-code" />

//         </div>
//     );
// }

// export default Modal;