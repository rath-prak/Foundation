import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).ready(function() {
  //toggle navigation
  // $(".toggle").on("click", function() {
  //   $(".toggle").parent().toggleClass('active');
  // });
//   $(".toggle").on("click", function(){
//   $(".chatbot-list-items").toggleClass("active");
// });

$("#burger-container").on("click", function() {
  $("#burger-container").toggleClass("open"),
    $("nav ul").toggleClass("show"),
    $(".content").toggleClass("move"); //onclick 'this' -> burger-container toggles with a class of 'open'
  });

});

$(document).foundation();
