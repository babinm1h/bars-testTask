import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../sevenTest/client/src/redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
