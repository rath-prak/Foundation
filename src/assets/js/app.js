import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).ready(function() {
  //toggle navigation
  $(".toggle").on("click", function() {
    $(".toggle").parent().toggleClass('active');
  });

  //animated red bar in feature images
  // $(function() {
  //   $('.feature-article-image').hover(function() {
  //     $('#image-red-bar').css('transform', 'translateX(0)');
  //   }, function() {
  //     // on mouseout, reset the background colour
  //     $('#image-red-bar').css('transform', 'translateX(-100%)');
  //   });
  // });

});

$(document).foundation();
