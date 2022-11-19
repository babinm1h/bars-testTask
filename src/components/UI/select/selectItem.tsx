import React, { FC, PropsWithChildren } from "react";
import st from "./select.module.scss";
import cn from "classnames";

type Props = {
  isSelected: boolean;
  onClick: (val: string) => void;
  value: string;
};

const SelectItem: FC<PropsWithChildren<Props>> = ({ isSelected, children, onClick, value }) => {
  const handleSelect = () => {
    onClick(value);
  };

  return (
    <div className={cn(st.selectItem, { [st.selectedItem]: isSelected })} onClick={handleSelect}>
      {children}
    </div>
  );
};

export default SelectItem;
