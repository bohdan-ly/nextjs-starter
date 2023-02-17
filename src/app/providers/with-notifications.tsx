import {
  ReactNotifications,
  Store,
  iNotification,
} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

type Notification = {
  type?: string | number;
  message?: string;
};

export const notify = (notification: Notification) => {
  if (!notification) return;

  const getTitle = () => {
    switch (notification.type) {
      case "200":
      case 200:
        return "Success";
      case 10000:
      case "10000":
        return "Oops!";
      default:
        return "Oops!";
    }
  };

  const getType = () => {
    switch (notification.type) {
      case "200":
      case 200: {
        return "success";
      }
      case 10000:
      case "10000":
        return "warning";
      default:
        return "warning";
    }
  };

  const settings: iNotification = {
    title: getTitle(),
    message: notification.message || "",
    type: getType(),
    insert: "top",
    container: "bottom-left",
    animationIn: ["animated", "flipInX"],
    animationOut: ["animated", "flipOutX"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  };

  Store.addNotification(settings);
};

export const withNotifications = (component: () => React.ReactNode) =>
  function WithNotifications() {
    return (
      <>
        <ReactNotifications />
        {component()}
      </>
    );
  };
