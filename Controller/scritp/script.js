
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

