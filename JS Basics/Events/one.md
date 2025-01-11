# HTML Events Example

This project demonstrates the usage of JavaScript events in an HTML document. It focuses on concepts like event listeners, event propagation, and event handling in JavaScript. The project involves interacting with a list of images and a hyperlink.

---

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [HTML Structure](#html-structure)
4. [JavaScript Events](#javascript-events)
   - [Event Handling](#event-handling)
   - [Event Propagation](#event-propagation)
   - [Event Default Prevention](#event-default-prevention)
5. [Usage](#usage)
6. [Conclusion](#conclusion)

---

## Overview

The project showcases a list of images and a link. Users can interact with these elements using clicks, triggering JavaScript functions that:
1. Log specific events to the console.
2. Remove clicked images dynamically.
3. Prevent default behavior for the link.

This implementation illustrates the best practices in event handling.

---

## Key Features

1. **Dynamic Image Removal**: Clicking an image removes it from the list.
2. **Event Propagation Control**: Demonstrates bubbling and stopping event propagation.
3. **Prevent Default Behavior**: The hyperlink is prevented from navigating to its target URL.
4. **Console Logging**: Logs event details to the browser's developer console.

---

## HTML Structure

```html
<body style="background-color: #414141; color: aliceblue">
    <h2>Amazing image</h2>
    <div>
        <ul id="images">
            <li><img width="200px" id="photoshop" src="image-url" alt="photoshop"></li>
            <li><img width="200px" id="japan" src="image-url" alt=""></li>
            <li><img width="200px" id="river" src="image-url" alt=""></li>
            <li><img width="200px" id="owl" src="image-url" alt="" onclick="alert('Owl')"></li>
            <li><img width="200px" id="prayer" src="image-url" alt=""></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
    </div>
</body>
```

### Explanation of Structure:
- The `<ul>` element contains images and a hyperlink as `<li>` elements.
- Each image has an `id` for identification.
- Inline `onclick` is used for the `owl` image as an example of direct event handling.

---

## JavaScript Events

### Event Handling

1. **Dynamic Image Removal**:
   - Uses `addEventListener` to attach a `click` event to the `#images` `<ul>` element.
   - Identifies the clicked target (`e.target`).
   - Checks if the target is an image (`e.target.tagName === 'IMG'`).
   - Removes the corresponding `<li>` using `remove()`.

   ```javascript
   document.querySelector('#images').addEventListener('click', function(e) {
       if (e.target.tagName === 'IMG') {
           e.target.parentNode.remove();
       }
   }, false);
   ```

2. **Prevent Default Behavior**:
   - Attaches a `click` event to the `#google` link.
   - Prevents navigation using `e.preventDefault()`.
   - Logs a message to the console.

   ```javascript
   document.getElementById('google').addEventListener('click', function(e) {
       e.preventDefault();
       console.log("google clicked");
   }, false);
   ```

---

### Event Propagation

1. **Bubbling**:
   - Events propagate from the target element up to the ancestors.
   - Example: Clicking the `owl` image triggers the parent `<ul>`'s event unless propagation is stopped.

2. **Stopping Propagation**:
   - The `owl` image uses an inline `onclick` to display an alert.
   - Event bubbling can be stopped using `e.stopPropagation()`.

---

## Usage

1. Open the HTML file in a browser.
2. Click on any image to remove it dynamically from the list.
3. Click the "Google" link to see the console log and observe that navigation is prevented.
4. Inspect the console for event details like `target`, `type`, and `timestamp`.

---

## Conclusion

This project demonstrates effective and efficient event handling in JavaScript. It showcases:
- Event listener usage (`addEventListener`).
- Event propagation concepts like bubbling and capturing.
- Real-world scenarios like dynamically modifying the DOM and preventing default actions.

You can use this project to understand and implement JavaScript events in larger web applications.