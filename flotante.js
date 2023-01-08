// obtener la imagen y el elemento div
var image = document.querySelector('img');
var description = document.querySelector('.description');

// seguir al mouse mientras esté sobre la imagen
image.addEventListener('mousemove', function(event) {
  // obtener la posición del mouse
  var x = event.clientX;
  var y = event.clientY;
  
  // mover el cuadro descriptivo
  description.style.left = x + 'px';
  description.style.top = y + 'px';
});

// mostrar el cuadro descriptivo al hacer hover sobre la imagen
image.addEventListener('mouseover', function() {
  // mostrar el cuadro descriptivo y añadir un efecto de fade in
  description.style.display = 'block';
  description.style.opacity = 1;
});

// ocultar el cuadro descriptivo al dejar de hacer hover sobre la imagen
image.addEventListener('mouseout', function() {
  // ocultar el cuadro descriptivo y añadir un efecto de fade out
  description.style.opacity = 0;
  setTimeout(function() {
    description.style.display = 'none';
  }, 2500);
});

