// Función para cargar el menú en todas las páginas
document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Hospital Rosales</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="doctores.html">Doctores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="boletin.html">Boletin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Testimonios.html">Testimonios</a>
        </li>
                <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Contactenos.html">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
    const footerHTML = `
                <p>&copy; 2024 Hospital de Niños Benjamín Bloom. Todos los derechos reservados.</p>
            <p>San Salvador, El Salvador</p>`

    // Buscar el elemento header
    const headerElement = document.querySelector('header');
    

        // Buscar el elemento header
    const footerElement = document.querySelector('footer');
    // Si existe el header, inyectar el contenido
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});
