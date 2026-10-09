//ejercicio el menu vivo version de referencia

//paso 1 el arreglo

const productos = [
    {id:crypto.randomUUID(),nombres:"molletes", precio: 30,categoria:"comida", disponible:true,},
    {id:crypto.randomUUID(),nombre:"jugo de naranja", precio:18,categoria:"bebida", disponible:true},
    {id:crypto.randomUUID(),nombre:"gelatina", precio:12, categoria:"postre", disponible:false}
];


//paso 2 y 3 leer (read)
const listar = ()=> productos;

const listarDisponibles = () => productos.filter((p) => p.disponible);

// paso 4 buscar uno
const obtenerPorid = (id) => productos.find((p) => p.id === id);

//paso 5 crear
function crear(datos){
    const nuevo = {id:crypto.randomUUID(), disponible:true, ...datos};
    productos.push(nuevo);
    return nuevo;
};

//paso 6 actualizar
function actualizar(id,cambios){
    const i = productos.findIndex((p) => p.id === id);
    if (i === -1) return null;
    productos[i] = {...productos[i], ...cambios};
    return productos[i];
}

//paso 7 borrado logico
function eliminar(id){
    const producto = obtenerPorid(id);
    if(!producto) return null;
    producto.disponible = false;
    return producto;
};

// razon del borrado logico los pedidos viejos guardan el id de su producto, el historial queda apuntado a algo que ya no existe
// y el corte del dia se rompe, es mejor marcarlo como no disponible para sacarlo del menu sin destruir la info, ademas se puede revertir

//paso 8 total con reduce
function calcularTotal(pedido){
    return pedido.item.reduce((suma,item) => suma + item.precio * item.cantidad, 0);
};

//paso 9
const existeNombre = (nombre) =>
    productos.some((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

const buscarPorTexto = (texto) =>
    productos.filter((p) => p.nombre.toLocaleLowerCase().includes(texto.toLocaleLowerCase()));

//paso 10 pruebas

console.log("listar");
console.log(listar());
console.log("listar disponibles");
console.log(listarDisponibles().map((p)=> p.nombre));

console.log("crear");
const creado = crear ({nombre:"sincronizada", precio:32, categoria:"comida"});
console.log(creado);
console.log(listar());