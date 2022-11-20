import React from "react";
import st from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={st.wrapper} role={"progressbar"}>
      <div className={st.ldsring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
