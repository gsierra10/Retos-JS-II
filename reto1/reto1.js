console.log("Reto 1");


var figura = prompt("elija una figura")
var area;
defineFigure(figura);

function defineFigure(figura){
    if(figura == "circulo"){ 
        var radio = parseFloat(prompt("ingresa el radio cm"));
        circulCalculo(radio)
    } else if(figura == "triangulo"){
        var altura = parseFloat(prompt("ingresa la altura en cm"));
        var base = parseFloat(prompt('ingresa el valor de la base en cm'));
        triangArea(altura, base);
    } else if(figura == 'cuadrado'){
        var lado = parseFloat(prompt('ingresa el tamaño del lado en cm'));
        cuadradArea(lado);
    }
    if(area){
        alert('el valor del area es: ' + area + 'cm^2')
    } else{
        figura = prompt("elija una figura");
        defineFigure(figura);
    }
}
function circulCalculo(radio){
    var pi = Math.PI;
    console.log(radio);
    area = pi * Math.pow(radio,2);   
}
function triangArea(altura, base){
    area = (base * altura) / 2;
}
function cuadradArea(lado){
    area = lado * lado
}




