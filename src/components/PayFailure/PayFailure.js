import React from "react";
import payFailure from "../../images/payFailure.mp4"

const PayFailure = () => {
  return <div className="payInfo">
    <video src={payFailure} autoPlay muted loop width="300"className="payFailureVideo"></video>
    <h3>Retry Again🔄!</h3>
  </div>;
};

export default PayFailure;
