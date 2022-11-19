import { FC, PropsWithChildren, Ref } from "react";
import st from "./select.module.scss";
import { CSSTransition } from "react-transition-group";

interface IProps {
  value: string;
  placeholder?: string;
  onInputClick: () => void;
  isOpen: boolean;
  selectRef: Ref<HTMLDivElement>;
  label?: string;
  error?: string;
}

const Select: FC<PropsWithChildren<IProps>> = ({
  value,
  children,
  placeholder,
  isOpen,
  onInputClick,
  selectRef,
  error,
  label,
}) => {
  return (
    <div className={st.select} ref={selectRef}>
      {label && (
        <label htmlFor="" className={st.selectLabel}>
          {label}
        </label>
      )}
      <div className={st.selectInputWrapper}>
        <input type="text" readOnly placeholder={placeholder} value={value} onClick={onInputClick} />
        <CSSTransition
          in={isOpen}
          mountOnEnter
          unmountOnExit
          timeout={100}
          classNames={{ enterDone: st.selectDropdownEntered }}
        >
          <div className={st.selectDropdown}>{children}</div>
        </CSSTransition>
      </div>
      {!!error && <div className={st.selectError}>{error}</div>}
    </div>
  );
};

export default Select;
