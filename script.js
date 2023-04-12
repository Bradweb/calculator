// Se busca el elemento con ID "screen" y se almacena en la variable "screen"
let screen = document.getElementById('screen');

// Se buscan todos los elementos <a> dentro del elemento con ID "buttons" y se almacenan en la constante "buttons"
const buttons = document.querySelectorAll("#buttons a");

// Se recorren todos los botones obtenidos en la variable "buttons" y se les agrega un evento "click"
for (const button of buttons) {
    button.addEventListener('click', function (e) {
        // Se previene la acción por defecto del evento "click"
        e.preventDefault();65

        // Si el botón presionado tiene un atributo "data-key" con valor "equal"
        if (e.target.dataset.key == 'equal') {
            // Se evalúa la expresión en la pantalla y se actualiza el contenido del elemento "screen"
            screen.textContent = eval(screen.textContent);
            // Si el resultado de la evaluación es mayor a 8 caracteres, se redondea y se actualiza nuevamente el contenido del elemento "screen"
            if (screen.textContent.length > 8) {
                screen.textContent = eval(screen.textContent).toFixed(8);
            }
        }
        // Si el botón presionado tiene un atributo "data-key" con valor "clear"
        else if (e.target.dataset.key == 'clear') {
            // Se borra todo el contenido de la pantalla
            screen.textContent = '';
        }
        // Si el botón presionado no es "equal" ni "clear"
        else {
            // Se agrega el valor del atributo "data-key" del botón presionado al contenido actual de la pantalla
            screen.textContent = screen.textContent + e.target.dataset.key;
        }
    });
}

document.addEventListener('keydown', function(event) {
    console.log(event); // Agregamos este console.log para verificar que el evento se está ejecutando
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Escape'];
    if (allowedKeys.includes(key)) {
      event.preventDefault();
      if (key === 'Enter') {
        if (screen.textContent !== '') {
          screen.textContent = eval(screen.textContent);
          if (screen.textContent.length > 8) {
            screen.textContent = eval(screen.textContent).toFixed(8);
          }
        }
      } else if (key === 'Escape') {
        screen.textContent = '';
      } else {
        screen.textContent += key;
      }
    }
  });