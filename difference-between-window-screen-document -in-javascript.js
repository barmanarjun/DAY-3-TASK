window object: Window Object is object of the browser which is always at top of the DOM hierarchy and represents the browser window.  It is like an API that is used to set and 
access all the properties and methods of the browser. It is automatically created by the browser.Whenever a window appears on the screen to 
display the contents of document, the window object is created. The window is the first thing that gets loaded into the browser . 
The window object represents the current browsing context . It holds things like window.location, window.history, window.screen, window.status, or the window.document 

Window Properties:

Window object has two properties to determine the size of the browser window. They are:

window.innerHeight : gives the inner height of the browser window (in pixels)

window.innerWidth : gives the inner width of the browser window (in pixels)

Window methods:

Some window object methods are:

window.open() : open a new window

window.close() : close the current window

window.moveTo() : move the current window

window.resizeTo() : resize the current window


screen object: Screen is a small information object about physical screen dimensions of the user device. It can be used to display screen width, 
height,colorDepth, pixelDepth etc. Screen object can be written without window prefix. like 
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth 

Document object: When an HTML document is loaded into a window/web browser, it becomes a document object. The ‘document’ object has various properties 
like title, URL, cookie, etc. that refer to other objects which allow access to and modification of the content of the web page. If there is
 a need to access any element in an HTML page, we always start with accessing the ‘document’ object. Document object is property of window object.
 Finding HTML elements:

 We can find the HTML elements by using the below document object methods:
 
 document.getElementById(id) : Find and return an element by element id
 
 document.getElementsByTagName(name) : Find and return an element by tag name
 
 document.getElementsByClassName(name) : Find return an element by class name
 
 Changing HTML elements:
 
 We can change the HTML element contents like style, text, attribute using the below properties:
 
 element.innerHTML = new html content : Change the inner HTML of an element
 
 element.attribute = new value : Change the attribute value of an HTML element
 
 element.style.property = new style : Change the style of an HTML element
 
 Adding and Deleting HTML elements:
 
 We can create, add, delete and replace HTML elements by using the below methods:
 
 document.createElement(element) : Create an HTML element
 
 document.removeChild(element) : Remove an HTML element
 
 document.appendChild(element) : Add an HTML element
 
 document.replaceChild(new, old) : Replace an HTML element
 
 document.write(text) : Write into the HTML output stream