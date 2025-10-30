import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorAlert = (text: any) => {
  toast.error(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    icon: false
  });
};

export const errorAlertCenter = (text: any) => {
  toast.error(text, {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
  });
};

export const warningAlert = (text: any) => {
  toast.warning(text, {
    className: "bg-black",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    icon: false
  });
};

export const successAlert = (text: any) => {
  toast.success(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    icon: false
  });
};

export const infoAlert = (text: any) => {
  toast.info(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
  });
};