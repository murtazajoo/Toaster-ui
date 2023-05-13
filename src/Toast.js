export default class Toast {
  constructor(content, type = "default", options = {}) {
    this.content = content;
    this.type = type;
    this.duration = options.duration || 3000; // Default duration of 3 seconds
    this.dismissTimeout = null;
    this.onClose = options.onClose || null; // Custom callback function on toast close
    this.createToastElement();
    this.setCustomStyles(options.styles);
  }

  createToastElement() {
    this.toastElement = document.createElement("div");
    this.toastElement.classList.add("toast");
    this.toastElement.classList.add(`toast--${this.type}`);
    this.toastElement.textContent = this.content;

    const closeButton = document.createElement("span");
    closeButton.classList.add("toast-close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => {
      this.close();
    });

    this.toastElement.appendChild(closeButton);
  }

  setCustomStyles(styles) {
    if (styles && typeof styles === "object") {
      Object.assign(this.toastElement.style, styles);
    }
  }

  setContent(content) {
    this.content = content;
    this.toastElement.textContent = this.content;
  }

  setDuration(duration) {
    this.duration = duration;
  }

  show(callback) {
    this.toastElement.style.opacity = "0";

    // Trigger reflow to ensure the fade-in animation starts
    // setTimeout is used to delay the reflow slightly
    setTimeout(() => {
      this.toastElement.style.opacity = "1";
    }, 10);

    this.startDismissTimeout(callback);
  }

  startDismissTimeout(callback) {
    this.dismissTimeout = setTimeout(() => {
      this.close();
      if (typeof callback === "function") {
        callback();
      }
    }, this.duration);
  }

  close() {
    if (typeof this.onClose === "function") {
      this.onClose(); // Execute the custom onClose callback
    }

    this.toastElement.style.animationName = "slide-out-blurred-right"; // Start closing animation

    // Remove the toast element from the container after the animation ends
    this.toastElement.addEventListener("animationend", () => {
      clearTimeout(this.dismissTimeout);
      if (this.toastElement.parentNode) {
        this.toastElement.parentNode.removeChild(this.toastElement);
      }
    });
  }
}
