// console.log('inside using-jquery');

// console.log(jQuery);

// document ready function
// $(document).ready(() => {
$(() => {

  // grab things from the DOM
  jQuery('.content');

  // create new DOM elements
  jQuery('<p>');

  // const $ = jQuery;

  // create a new li
  const myLi = $('<li>'); // <li></li>
  myLi.text('Six'); // <li>Six</li>

  const myLi2 = $('<li>').text('Eight'); // <li>Eight</li>
  const myLi3 = $('<div><li>Nine</li></div>'); // <div><li>Nine</li></div>

  // grab the main-list
  const mainList = jQuery('#main-list');

  // append the li to the mainlist
  mainList.append(myLi, myLi2, myLi3);
  // mainList.prepend(myLi);

  // event handling with jQuery
  const button = $('#button');

  // attach a function to run when the click event occurs
  button.on('click', () => {
    console.log('the button was clicked');
  });

});
