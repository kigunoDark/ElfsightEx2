import React from 'react';
import Slider from '../../../../Slider/Slider';
function PhotoModal(props) {

  return  ( 
        <div>
          <div ref={ props.modalRef } 
               className={ props.modalStatus ?
                           "show_modal" :
                           "hide_modal" } >
            <div className="container">
                <div className="modal_content">
                  {props.modalAlbum ? <Slider images = { props.modalAlbum } /> : null }
                </div>
                <div onClick={ props.handleCardClick } 
                    className="modal_customn_btn"> 
                  Close
                </div>
            </div>
          </div>
      </div>
  )
}
export default PhotoModal;