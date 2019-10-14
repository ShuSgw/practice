import React from "react";
import Modal from "react-modal";

const OptionModel = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="selected options"
    onRequestClose={props.clearSelectedOption}
  >
    <h3>selected options</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.clearSelectedOption}>Close</button>
  </Modal>
);

export default OptionModel;
