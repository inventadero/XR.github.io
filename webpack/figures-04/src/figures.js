// Simple JS file for figures.html

// We need the A-frame library
import 'aframe';

// Require font files to have them included in dist
import roboto_json from './Roboto-msdf.json';
import roboto_png from './Roboto-msdf.png';
// URJC object
import urjc_object from './urjc.obj';

// Actual code for the application
function activate () {
  var sphere = document.querySelector('a-sphere');
  sphere.addEventListener('mouseenter', function () {
    sphere.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
  });
  sphere.addEventListener('mouseleave', function () {
    sphere.setAttribute('scale', {x: 1, y: 1, z: 1});
  });
};

document.addEventListener('DOMContentLoaded', activate);
