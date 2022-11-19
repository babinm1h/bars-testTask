import React, { FC, PropsWithChildren } from "react";
import Header from "./header/header";
import st from "./mainLayout.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={st.wrapper}>
      <Header />
      <main className={st.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
