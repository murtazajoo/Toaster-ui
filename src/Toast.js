class Toast {
  constructor(content, type = "default", options = {}) {
    this.id = options.id || this.generateId();
    this.content = content;
    this.type = type;
    this.allowHtml = options.allowHtml || false; // Whether the toast should allow HTML content
    this.autoClose =
      options.autoClose === false
        ? false
        : this.type === "loading"
        ? false
        : true; // Whether the toast should automatically close after the duration
    this.duration = options.duration || 3000; // Default duration of 3 seconds
    this.dismissTimeout = null;
    this.onClose = options.onClose || null; // Custom callback function on toast close
    this.createToastElement(this.content, this.type, this.duration);
    this.setCustomStyles(options.styles);
  }

  createToastElement(content, type, duration) {
    this.toastElement = document.createElement("div");
    this.toastElement.classList.add("toaster-ui-lib");
    this.toastElement.classList.add(`toaster-ui-lib-${type}`);
    this.toastElement.style.setProperty("--timer", ` ${duration}ms`);
    this.toastElement.style.setProperty(
      "--display",
      this.autoClose ? "block" : "none"
    );

    if (this.type === "loading") {
      const loadingElement = document.createElement("div");
      loadingElement.classList.add("toaster-ui-lib-loader");
      this.toastElement.appendChild(loadingElement);
    }

    const textElement = document.createElement("span");
    textElement.classList.add("toaster-ui-lib-text");
    if (this.allowHtml) {
      textElement.innerHTML = `<span>${content}</span>`;
    } else {
      textElement.innerText = content;
    }

    this.toastElement.appendChild(textElement);

    const closeButton = document.createElement("span");
    closeButton.classList.add("toaster-ui-lib-close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => {
      this.close();
    });

    this.toastElement.appendChild(closeButton);
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  update(content, type, options = {}, existingToastElement) {
    this.content = content;
    this.type = type || existingToastElement.type;
    this.allowHtml = options.allowHtml || existingToastElement.allowHtml;
    this.autoClose =
      options.autoClose !== undefined
        ? options.autoClose === false
          ? false
          : true
        : existingToastElement.type === "loading"
        ? true
        : existingToastElement.autoClose;
    this.onClose = options.onClose || existingToastElement.onClose;
    this.duration = options.duration || existingToastElement.duration;
    this.setCustomStyles(options.styles || existingToastElement.styles);

    if (this.toastElement) {
      this.toastElement.className = `toaster-ui-lib toaster-ui-lib-${this.type}`;
      this.toastElement.style.setProperty("--timer", `${this.duration}ms`);
      this.toastElement.style.setProperty(
        "--display",
        this.autoClose ? "block" : "none"
      );
    }
    this.toastElement.innerHTML = "";

    if (this.type === "loading") {
      const loadingElement = document.createElement("div");
      loadingElement.classList.add("toaster-ui-lib-loader");
      this.toastElement.appendChild(loadingElement);
    }

    const textElement = document.createElement("span");
    textElement.classList.add("toaster-ui-lib-text");
    if (this.allowHtml) {
      textElement.innerHTML = `<span>${this.content}</span>`;
    } else {
      textElement.innerText = this.content;
    }

    this.toastElement.appendChild(textElement);

    const closeButton = document.createElement("span");
    closeButton.classList.add("toaster-ui-lib-close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => {
      this.close();
    });

    this.toastElement.appendChild(closeButton);

    if (this.autoClose === true) {
      this.startDismissTimeout();
    }
  }

  setCustomStyles(styles) {
    if (styles && typeof styles === "object") {
      Object.assign(this.toastElement.style, styles);
    }
  }

  setDuration(duration) {
    this.duration = duration;
  }

  show() {
    this.toastElement.style.opacity = "0";
    if (this.autoClose === true) {
      this.startDismissTimeout();
    }
  }

  startDismissTimeout() {
    this.dismissTimeout = setTimeout(() => {
      this.close();
    }, this.duration);
  }

  close() {
    if (typeof this.onClose === "function") {
      this.onClose(); // Execute the custom onClose callback
    }

    this.toastElement.style.animation =
      "toaster-ui-lib-slide-out-blurred-right 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95) both"; // Start closing animation

    // Remove the toast element from the container after the animation ends
    this.toastElement.addEventListener("animationend", () => {
      clearTimeout(this.dismissTimeout);
      if (this.toastElement.parentNode) {
        this.toastElement.parentNode.removeChild(this.toastElement);
      }
    });
  }
}

module.exports = Toast;
