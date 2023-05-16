require("./toasts.css");
const Toast = require("./Toast.js");

class ToasterUi {
  constructor() {
    this.toastMap = new Map(); // Use a Map to store the toasts with their IDs
    this.container = document.createElement("div");
    this.container.classList.add("toaster-ui-lib-container");
    document.body.appendChild(this.container);
  }

  addToast(content, type = "default", options = {}) {
    const toast = new Toast(content, type, options);
    // this.container.appendChild(toast.toastElement);
    this.container.insertBefore(toast.toastElement, this.container.firstChild);
    this.toastMap.set(toast.id, toast); // Store the toast in the Map using its ID
    toast.show();
    return toast.id; // Return the ID of the added toast
  }

  updateToast(id, content, type, options = {}) {
    const toast = this.toastMap.get(id); // Retrieve the toast using its ID from the Map
    if (toast) {
      console.log(toast);
      toast.update(content, type, options, toast);
    }
  }
}

module.exports = ToasterUi;
