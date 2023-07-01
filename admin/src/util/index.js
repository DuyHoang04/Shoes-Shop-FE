import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const getHostName = () => {
  return "http://localhost:8080/api/v1";
};

export const toastSuccess = (message) => {
  return toast.success(message, toastOptions);
};

export const toastError = (message) => {
  return toast.error(message, toastOptions);
};

export const convertImageByte = (imageByte) => {
  const blob = new Blob([imageByte], { type: "image/jpeg" });
  const url = URL.createObjectURL(blob);
  return url;
};
