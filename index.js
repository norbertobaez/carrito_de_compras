
const url = ""
const contenedor = document.querySelector('tbody')
let resultados = ""

const myModalBurguer = new bootstrap.Modal(document.getElementById('modalBurguer'))

const formBurguer = document.querySelector("form")
const descripcion = document.getElementById("descripcion")
const precio = document.getElementById("precio")
const stock = document.getElementById("stock")
let opcion = "";

btnCrear.addEventListener('click', ()=>{
    descripcion.value = ''
    precio.value = ''
    stock.value = ''
    myModalBurguer.show()
    opcion = 'crear'
})


const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultados += ` <tr>
                            <td>${articulo.id}</td>
                            <td>${articulo.descripcion}</td>
                            <td>${articulo.precio}</td>
                            <td>${articulo.stock}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                        </tr>
                    `    
    })
    contenedor.innerHTML = resultados
}

fetch(url)
    .then (response => response.json())
    .then (datos => mostrar(datos))
    .catch( error => console.log(error))