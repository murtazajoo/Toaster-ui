// Create a new instance of ToastManager
// import ToastManager from "toaster-uii";

const toastManager = new ToasterUi();

//custo style toggle
let customStyle = false;
const customStyleToggle = document.getElementById("customStyleToggle");
const customStyleContainer = document.getElementById("customStyleContainer");
const types = document.querySelectorAll('input[name="type"]');
customStyleContainer.style.display = "none";

let allowHtml = true;
const allowHtmlEle = document.getElementById("allowHtml");

allowHtmlEle.addEventListener("change", function () {
  allowHtml = this.checked;
});

customStyleToggle.addEventListener("change", function () {
  if (this.checked) {
    customStyleContainer.style.display = "block";
    types.forEach((type) => {
      type.setAttribute("disabled", this.checked);
    });
  } else {
    customStyleContainer.style.display = "none";
    types.forEach((type) => {
      type.removeAttribute("disabled");
    });
  }

  customStyle = this.checked;
});

// Get form element and add submit event listener
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get selected toast type
  const selectedType = document.querySelector(
    'input[name="type"]:checked'
  ).value;

  // Get toast content
  const content = document.getElementById("content").value;

  // Get autoClose option
  const autoClose = document.querySelector(
    'input[name="autoClose"]:checked'
  ).value;

  // Get duration value
  const duration = parseInt(document.getElementById("duration").value);

  // Get toast styles
  const background = document.getElementById("background").value;
  const color = document.getElementById("color").value;
  const fontFamily = document.getElementById("fontFamily").value;
  const borderRadius = document.getElementById("borderRadius").value;

  let styles = {
    background: background,
    color: color,
    fontFamily: fontFamily,
    borderRadius: borderRadius + "px",
  };

  // Add a toast to the ToastManager
  console.log(allowHtml);
  toastManager.addToast(
    content.includes("<script") ? "No script allowed" : content,
    selectedType || "",
    {
      autoClose: autoClose === "true",
      allowHtml: allowHtml,
      duration: duration,
      styles: customStyle ? styles : {},
      // Custom callback function for toast close event
      onClose: function () {
        // Log a message to the console
        console.log("Toast closed!");
      },
    }
  );

  //add cod to html page so user can copy it

  const code = document.getElementById("code");

  code.innerText = `
// Create a new instance of ToastManager
const toastManager = new Toaster.ToastManager();

toatsManager.addToast('${content}', "${selectedType}", {
    autoClose: ${autoClose === "true"},
    duration: ${duration === "" ? 3000 : duration},
    // Custom Styles, Please Edit the keys of the object to change the styles
    styles: ${customStyle ? JSON.stringify(styles) : "{}"},
    onClose: ()=>{console.log("Toast closed!");,
    allowHtml: ${allowHtml}
  }
});

`;
});
