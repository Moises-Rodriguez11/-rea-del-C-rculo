// Declarar variable para el radio
let radio = 4;

// Calcular el área del círculo
var area = Math.PI * (radio * radio);

// Mostrar el resultado en el elemento con id 'resultado'
document.getElementById('resultado').textContent = `El área del círculo es: ${area.toFixed(2)}`;