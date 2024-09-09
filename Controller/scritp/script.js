<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', function () {
    $('#agregarTerminoModal').on('show.bs.modal', function (event) {
        var modal = $(this);
        fetch('App/modal/agregarTermino.html')
            .then(response => response.text())
            .then(data => {
                modal.find('.modal-content').html(data);
            })
            .catch(error => console.error('Error al cargar el modal:', error));
    });
});

=======
/**
 * este codigo es para cargar el encabezado
 */
function cargarEncabezado() {
    fetch('../../App/view/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el encabezado:', error));
}
// Llamar a la función cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarEncabezado);


/**
 * este codigo es para cargar el footer
 */
function cargarFooter() {
    fetch('../../App/view/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
    }
document.addEventListener('DOMContentLoaded', cargarFooter);


/**
 * este codigo es para cargar el modal de agregarTermino
 */
function cargarmodal() {
    fetch('../../App/modal/agregarTermino.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('agregar-TerminoModal').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el modal:', error));
}    
document.addEventListener('DOMContentLoaded', cargarmodal);


/**
 * este codigo es para cargar el modal de agregarTermino
 */
document.addEventListener('DOMContentLoaded', function () {
    $('#agregarTerminoModal').on('show.bs.modal', function (event) {
        var modal = $(this);
        fetch('App/modal/agregarTermino.html')
            .then(response => response.text())
            .then(data => {
                modal.find('.modal-content').html(data);
            })
            .catch(error => console.error('Error al cargar el modal:', error));
    });
});

/**
 * este codigo es para cargar los terminos
 */
// function cargarTerminos() {          
//     fetch('/api/terminos')
//         .then(response => response.json())
//         .then(data => {
//             const tbody = document.querySelector('table tbody');
//             tbody.innerHTML = '';
//             data.forEach(termino => {
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = `
//                     <td>${termino.titulo}</td>
//                     <td>${termino.descripcion}</td>
//                 `;
//                 tbody.appendChild(tr);
//             });
//         })
//         .catch(error => console.error('Error:', error));
// }

// Llamar a la función cuando se carga la página
    // document.addEventListener('DOMContentLoaded', cargarTerminos);


/**
 * este codigo es para agregar contenido
 */
document.getElementById('agregarContenido').addEventListener('click', function() {
    const contenidoAdicional = document.getElementById('contenidoAdicional');
    const nuevoIndex = contenidoAdicional.children.length / 2 + 1;
    
    const nuevoSubtitulo = document.createElement('div');
    nuevoSubtitulo.className = 'mb-3';
    nuevoSubtitulo.innerHTML = `
      <label for="subtitulo${nuevoIndex}" class="form-label">Subtítulo</label>
      <input type="text" class="form-control" id="subtitulo${nuevoIndex}" required>
    `;
    
    const nuevaDescripcion = document.createElement('div');
    nuevaDescripcion.className = 'mb-3';
    nuevaDescripcion.innerHTML = `
      <label for="descripcionSubtitulo${nuevoIndex}" class="form-label">Descripción del Subtítulo</label>
      <textarea class="form-control" id="descripcionSubtitulo${nuevoIndex}" rows="2" required></textarea>
    `;
    
    contenidoAdicional.appendChild(nuevoSubtitulo);
    contenidoAdicional.appendChild(nuevaDescripcion);
  });
>>>>>>> a57efec (se hicieron muchos cambios)
