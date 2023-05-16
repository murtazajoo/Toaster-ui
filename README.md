# Toaster-Ui Library Documentation

### OpenSource feel free to fork and make a pull request.

Toaster-Ui is a lightweight JavaScript library that allows you to easily display toast messages in your web application. This documentation provides a comprehensive guide on how to install and use Toaster-Ui in your project.

## Installation

To use Toaster-Ui, you have two options for installation:

### Option 1: Script Tag

Include the following script tag in your HTML file:

    <script src="https://unpkg.com/toaster-ui@1.0.0/dist/main.js"></script>

or

    <script src="https://cdn.jsdelivr.net/npm/toaster-ui@1.0.0/dist/main.js"></script>

### Option 2: NPM

Install Toaster-Ui using npm:

    npm i toaster-ui

## Usage

Once Toaster-Ui is installed in your project, you can start using it by following the instructions below.

If you imported the library using a module bundler like webpack or Rollup:

    import ToasterUi from 'toaster-ui';

If you included the library using a script tag, there's no need to import it explicitly.

Create a new instance of ToasterUi:

    const toaster = new ToasterUi();

### Basic Usage

To display a basic toast message, use the `addToast()` method:

    toaster.addToast("This is a toast");

The `addToast()` method takes three parameters:

- `content` (required): The message content of the toast.
- `type` (optional): The type of the toast. It can be one of the following: `default`, `success`, `error`, `warning`, `info`, `loading`. Default is `default`.
- `options` (optional): Additional options to customize the toast. See the **Options** section for more details.

### Options

The `addToast()` method's third parameter, `options`, allows you to customize various aspects of the toast. The available options are:

| Option    | Type     | Default | Description                                                                                                         |
| --------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| duration  | number   | 3000    | The duration in milliseconds that the toast should be displayed before automatically closing.                       |
| autoClose | boolean  | true    | Specifies whether the toast should automatically close after the duration. Set it to false to disable auto-closing. |
| styles    | object   | null    | An object containing CSS styles to be applied to the toast element.                                                 |
| allowHtml | boolean  | false   | Specifies whether HTML content should be allowed in the toast message.                                              |
| onClose   | function | ()=>{}  | A callback function to be executed when the toast is closed.                                                        |

### Updating a Toast

To update a toast message after it has been displayed, you can use the `updateToast()` method. This method requires the `id` of the toast that needs to be updated, which is returned when adding a toast.

Here's an example of how to update a toast:

    const toastId = toaster.addToast("Initial toast content");

    // To update the toast
    toaster.updateToast(toastId, "New toast content", "success", { duration: 5000 });

The `updateToast()` method takes four parameters:

- `id` (required): The ID of the toast to be updated.
- `newContent` (optional): The new message content of the toast.
- `newType` (optional): The new type of the toast.
- `newOptions` (optional): New options to customize the toast. Only the specified options will be updated, and the rest will remain unchanged.

### Manual Update for Loading Toasts

<div class="alert alert-warning">

Toasts of type "loading" have their `autoClose` option set to `false` by default, requiring manual updates using the `updateToast()` function. This allows you to control when to close the toast and provide status updates to users. Use the `updateToast()` function with the toast's ID to modify its content, type, and other options as needed.

</div>

When the type of the toast is "loading", the `autoClose` option is automatically set to `false`. This means that the toast will not close automatically after a duration. Instead, you'll need to update the toast manually using the `updateToast()` function to indicate when the loading is complete or any other desired changes.

Here's an example of how to create a loading toast and manually update it:

    const toastId = toaster.addToast("Loading in progress", "loading");

    // Simulate loading completion after 3 seconds
    setTimeout(() => {
      toaster.updateToast(toastId, "Loading complete!", "success", { autoClose: true });
    }, 3000);

In this example, we first create a loading toast by setting the type to "loading". Since the `autoClose` option is set to `false`, the toast will remain visible until we manually update it. After a simulated loading process of 3 seconds, we use the `updateToast()` function to change the toast's content, type to "success", and enable `autoClose` by setting it to `true`. This causes the toast to automatically close after the specified duration.

Remember, for loading toasts, you need to manually update the toast using `updateToast()` to reflect changes or indicate completion.

<div class="alert alert-info">

#### Here's a clarification on how the update process works:

When using the `updateToast()` function, you can specify new values for the `content`, `type`, and `options` of the toast. If you omit any of these parameters, the corresponding property of the toast will retain its existing value.

For example:

    const toastId = toaster.addToast("Initial toast", "default", { duration: 3000 });

    // Update the toast without modifying the type or options
    toaster.updateToast(toastId, "Updated toast");

    // The toast will still have the "default" type and a duration of 3000

In the example above, the `updateToast()` function is called without providing a new `type` or `options`. As a result, the toast will retain its original type ("default") and the `duration` option of 3000 milliseconds.

However, if you explicitly provide a new `type` parameter during the update, it will override the existing type:

    const toastId = toaster.addToast("Initial toast", "default", { duration: 3000 });

    // Update the toast and change its type
    toaster.updateToast(toastId, "Updated toast", "success");

    // The toast will now have the "success" type and a duration of 3000

In this case, the `type` parameter is explicitly set to "success" during the update, causing the toast to change its type accordingly.

To update specific options while retaining the rest, you can pass only the updated options as the `newOptions` parameter:

    const toastId = toaster.addToast("Initial toast", "default", { duration: 3000, styles: { color: "blue" } });

    // Update the toast and change only the styles
    toaster.updateToast(toastId, "Updated toast", null, { styles: { color: "red" } });

    // The toast will retain its type, duration, and the updated styles { color: "red" }

In the example above, the `styles` option is updated while retaining the existing type ("default") and duration (3000 milliseconds).

I apologize for any confusion caused by my previous response. Thank you for bringing it to my attention, and I hope this clarifies the behavior of updating options and types when using the `updateToast()` function.

</div>

That's it! You now have That's it! You now have a basic understanding of how to use Toaster-Ui in your web application. Below, you'll find some additional examples and usage details to further enhance your experience with the library.

### Creating Custom Types

To create a custom toast type, you can define your own CSS class and apply it to the toast element. Here's an example:

    .toaster-ui-lib-custom {
      background-color: #ff00ff; /* Replace with your desired background color */
      /* Add any other custom styles here */
    }

You can apply the custom type to a toast by setting the `type` parameter to your custom type name:

    toaster.addToast("Custom toast message", "custom");

The toast will now have the custom type styling applied to it.

### Examples

#### Example 1: Customizing Toast Styles

You can customize the styles of a toast by providing a `styles` object in the options parameter. Here's an example:

    const options = {
      duration: 2000,
      styles: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
        border: '1px solid #ffffff',
      },
    };

    toaster.addToast("Customized toast", "success", options);

#### Example 2: Allowing HTML Content

To display HTML content in a toast message, set the `allowHtml` option to `true`. Here's an example:

    const options = {
      allowHtml: true,
    };

    toaster.addToast("<strong>This is a bold toast message</strong>", "info", options);

#### Example 3: Handling Toast Closure

You can specify a callback function to be executed when a toast is closed by providing the `onClose` option. Here's an example:

    const options = {
      onClose: () => {
        console.log("Toast closed!");
      },
    };

    toaster.addToast("Toast with closure callback", "default", options);

#### Example 4: Updating toast

example of fetching data from an application using Toaster-Ui:

    const toaster = new ToasterUi();

    // Create a function to fetch some data from the application
    async function dataFetch() {
      // Add a toast of type loading
      const toastId = toaster.addToast("Loading, please wait", "loading");

      const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");

      const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise resolved.");
        }, 2000);
      });

      if (data.status !== 200) {
        // Update the toast with error message
        toaster.updateToast(toastId, "Error while fetching data", "error");
        return;
      } else {
        // Update the toast with success message
        toaster.updateToast(toastId, "Data fetched successfully", "success");
      }

      setTimeout(() => {
        toaster.updateToast(toastId, "Promise resolved", "success", {
          autoClose: true,
        });
      }, 2000);

      const json = await data.json();
      return json;
    }

    dataFetch();

In this example, the `dataFetch` function is created to fetch data from an application. It starts by adding a toast of type "loading" using `toaster.addToast` and assigns the returned `toastId` to a variable.

Next, it makes an asynchronous `fetch` request to retrieve data from the specified URL. It also simulates a promise being resolved after a 2-second delay using `setTimeout`.

If the `data` response has a status other than 200, indicating an error, the toast is updated with an error message using `toaster.updateToast`. Otherwise, if the data is successfully fetched, the toast is updated with a success message.

After 2 seconds, another toast update is triggered to display the message "Promise resolved" with a success type, and the `autoClose` option set to `true` to automatically close the toast.

Finally, the fetched data is converted to JSON using `data.json()` and returned.

When you run the `dataFetch` function, the toast messages will be displayed in the Toaster-Ui component based on the progress and status of the data fetching process.

### Summary

Congratulations! You've successfully learned how to install, import, and use Toaster-Ui in your web application. You're now equipped with the knowledge to display toast messages with custom styles, handle toast closure, and take advantage of advanced features offered by the library. Explore and experiment with the different options and methods to enhance your user interface with informative and visually appealing toast messages. Happy coding!
