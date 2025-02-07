import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed top-7 right-4 z-50 p-1 rounded-md bg-green-500 text-white max-w-xs"
      : "fixed top-6 right-4 z-50 p-1 rounded-md bg-red-500 text-white max-w-sm";

  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-md font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
