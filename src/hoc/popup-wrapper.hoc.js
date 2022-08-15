import React from "react";
import PopupComponent from "../common/components/popup/popup.component";

const PopupWrapperHOC = (props) => (
  <>
    {props.children}
    <PopupComponent />
  </>
)

export default PopupWrapperHOC;