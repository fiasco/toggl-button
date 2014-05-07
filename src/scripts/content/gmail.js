/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/

'use strict';

togglbutton.render('.hN:not(.toggl)', {observe: true}, function (elem) {

  var link = togglbutton.createTimerLink({
    className: 'gmail',
    description: function () {
      return document.querySelectorAll('.ha h2')[0].textContent
    },
    projectName: elem.getAttribute('name'),
  });

  link.addEventListener('click', function (e) {
    console.log(this);
  });

  elem.appendChild(link); 
});
