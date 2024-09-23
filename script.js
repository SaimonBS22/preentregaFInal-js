const seccion = document.querySelector('.seccion');
document.body.appendChild(seccion);

const contenedor1 = document.querySelector('#div2')



let titulo = document.createElement('h1');
titulo.innerText = 'Conoce alguno de nuestros platos';
titulo.classList = 'h1';
document.body.appendChild(titulo);


let productos = [];

function agregarProductos(titulo, imagenSrc){
    let producto = document.createElement('div');
    producto.classList.add = 'producto';
    producto.innerHTML = `<h2 class='titulo'>${titulo}</h2>
                          <img class='imagen' src='${imagenSrc}'>`;
    
    productos.push(producto);
}



let flechaDerecha = document.querySelector('#flecha-der');
let flechaIzquierda = document.querySelector('#flecha-izq');
let posicionActual = 0;

function mostrarProducto(posicion){
    contenedor1.innerHTML = '';
    contenedor1.appendChild(productos[posicion]);
}

flechaDerecha.addEventListener('click', ()=>{
    posicionActual = (posicionActual + 1) % productos.length;
    mostrarProducto(posicionActual);
})

flechaIzquierda.addEventListener('click', ()=>{
    posicionActual = (posicionActual - 1 + productos.length) % productos.length;
    mostrarProducto(posicionActual);
})

Swal.fire({
    position:'top',
    title:'Ingresa tu nombre',
    input:'text',
    inputValidator: (value)=>{
        if(!value){
            return 'Debes ingresar un nombre';
        }
        }
    }).then((result)=>{
    if(result.value){
        localStorage.setItem('NombreUsuario', result.value);
        Swal.fire({
            icon:'success',
            title: 'Nombre ingresado correctamente'
        })
    }
})


let datos = localStorage.getItem('NombreUsuario');
sessionStorage.setItem('NombreClave', datos);
