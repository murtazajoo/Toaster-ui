import "./toasts.css";
import Toast from "./Toast.js";

class ToastManager {
  constructor() {
    this.toastQueue = [];
    this.isDisplayingToast = false;
    this.container = document.createElement("div");
    this.container.classList.add("toast-container");
    document.body.appendChild(this.container);
  }

  addToast(content, type = "default", options = {}) {
    const toast = new Toast(content, type, options);
    this.toastQueue.push(toast);

    this.displayNextToast();
  }

  displayNextToast() {
    if (this.toastQueue.length > 0) {
      this.isDisplayingToast = true;
      const toast = this.toastQueue.shift(); // Retrieve the first toast from the queue
      this.container.insertBefore(
        toast.toastElement,
        this.container.firstChild
      );
      toast.show(() => {
        this.isDisplayingToast = false;
        this.displayNextToast();
      });
    }
  }
}

export { Toast, ToastManager };
