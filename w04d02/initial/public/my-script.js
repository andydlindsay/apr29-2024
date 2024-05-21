console.log('inside my-script.js');

console.log(username); // 'alice'

// // create a new li
const myLi = document.createElement('li');

// // create a new text node
const myTextNode = document.createTextNode('Five');

// // append the text node to the li
myLi.append(myTextNode); // <li>Five</li>

// // get the ul with the id of "main-list"
const mainList = document.getElementById('main-list');

// // append our new li to the main list
mainList.append(myLi);


// // event handling

// // find the button in the DOM
const button = document.getElementById('button');

// // attach code to run when the click event occurs
button.addEventListener('mouseover', () => {
  console.log('the button was clicked on');
});
