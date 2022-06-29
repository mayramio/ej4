let nombre
nombre = prompt('Ingrese su nombre')

let sexo
sexo = prompt('Ingrese su sexo: Hombre / Mujer / No binario')

if (sexo == "hombre" || sexo == "Hombre")
{
    console.log("Bienvenido Sr. " + nombre)
    alert('Bienvenido Sr. ' + nombre)
} else if (sexo == "mujer" || sexo == "Mujer") {
    console.log("Bienvenida Sra. " + nombre)
    alert('Bienvenida Sra. ' + nombre)
} else {
    console.log("Bienvenid@ " + nombre)
    alert('Bienvenid@ ' + nombre)
}