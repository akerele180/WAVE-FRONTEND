import React from "react";

const WaveModal = (props) => {
  return (
    <div className="absolute w-screen h-screen">
      <div className="absolute w-2/6 bg-primary left-1/2 -translate-x-1/2 rounded-md modal p-3 shadow-2xl z-20 top-1/4">
        <div className="modal__header text-center">WAVE APP</div>
        <div className="modal__body pt-5">
          <div className="modal__content">{props.children}</div>
          <div className="float-right">
            <button className="bg-white mx-2   py-1 rounded px-2 btn-cancel">
              Decline
            </button>
            <button className="bg-white mx-2  py-1 rounded px-2 btn-ok">
              Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveModal;
