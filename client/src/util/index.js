import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastOptions = {
  position: "top-right",
  autoClose: 1000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const getHostName = () => {
  return "http://localhost:8080/api/v1";
};

export const toastSuccess = (mess) => {
  return toast.success(mess, toastOptions);
};

export const toastError = (mess) => {
  return toast.error(mess, toastOptions);
};
