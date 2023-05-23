import React, { Fragment } from "react";
import HeadPhoneIcon from "../../assets/images/HeadPhoneIcon.svg";

const HeadPhone = () => {
  const style1 = {
    position: "fixed",
    bottom: "40px",
    right: "30px",
    background: "rgba(255, 255, 255, 0.5)",
    border: "1px solid rgba(0, 0, 0, 0.58)",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(10.5px)",
    borderRadius: "100%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const style2 = {
    background: "rgba(255, 255, 255, 0.69)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(47px)",
    borderRadius: "25px 24px 25.1087px 1px",
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const style3 = {
    width: "15px",
  };

  return (
    <Fragment>
      <div style={style1}>
        <div style={style2}>
          <img style={style3} src={HeadPhoneIcon} alt="HeadPhoneIcon" />
        </div>
      </div>
    </Fragment>
  );
};

export default HeadPhone;
