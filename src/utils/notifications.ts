import { toast } from "react-toastify";

export const notifYemployeeCreated = (onClose: () => void) => {
  return toast.success("Сотрудник успешно создан", {
    onClose,
  });
};

export const notifYemployeeUpdated = (onClose: () => void) => {
  return toast.success("Сотрудник успешно обновлен", { onClose });
};

export const notifyError = (errorMsg: string | string[], onClose?: () => void) => {
  return toast.error(errorMsg.toString(), { onClose });
};
