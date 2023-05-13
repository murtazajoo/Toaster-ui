// Import the Toast and ToastManager classes from the library
import { Toast, ToastManager } from "../src/index";

describe("Toast Library", () => {
  let toastManager;

  beforeEach(() => {
    // Create a new instance of ToastManager before each test
    toastManager = new ToastManager();
  });

  test("ToastManager should add and display a toast", () => {
    // Add a toast to the ToastManager
    toastManager.addToast("This is a test toast");

    // Retrieve the toast element from the ToastManager's container
    const toastElement = toastManager.container.firstChild;

    // Verify that the toast element exists and has the correct content
    expect(toastElement).toBeTruthy();
    expect(toastElement.textContent).toBe("This is a test toast×");
  });

  test("ToastManager should execute custom callback function on toast close", () => {
    let callbackCalled = false;

    // Add a toast with a custom onClose callback
    toastManager.addToast("This is a test toast", "default", {
      onClose: () => {
        callbackCalled = true;
      },
    });

    // Retrieve the toast element from the ToastManager's container
    const toastElement = toastManager.container.firstChild;

    // Trigger the close event on the toast element
    toastElement.querySelector(".toast-close").click();

    // Verify that the custom callback function was called
    expect(callbackCalled).toBe(true);
  });
});

describe("Toast", () => {
  test("Toast should create a toast element with the correct content and type", () => {
    // Create a new instance of Toast
    const toast = new Toast("Test Content", "success");

    // Verify the toast element's content and type
    expect(toast.toastElement.textContent).toBe("Test Content×");
    expect(toast.toastElement.classList.contains("toast--success")).toBe(true);
  });
});
