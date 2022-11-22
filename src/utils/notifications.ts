import { toast } from "react-toastify";

export const notifYemployeeCreated = (onOpen: () => void) => {
  return toast.success("Сотрудник успешно создан", {
    onOpen,
  });
};

export const notifYemployeeUpdated = (onOpen: () => void) => {
  return toast.success("Сотрудник успешно обновлен", { onOpen });
};

export const notifyError = (errorMsg: string | string[], onOpen?: () => void) => {
  return toast.error(errorMsg.toString(), { onOpen });
};
