function obtenerParametroURL(nombre) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nombre);
  }
  
  function obtenerDetallesProducto(idProducto) {
    // Obtener todos los productos del localStorage
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
  
    // Buscar el producto por ID
    const producto = productos.find(p => p.id == idProducto);
  
    if (producto) {
      mostrarDetallesProducto(producto);
    } else {
      document.getElementById('detalles-producto').innerHTML = 'Producto no encontrado.';
    }
  }
  
  function mostrarDetallesProducto(producto) {
    const contenedor = document.getElementById('detalles-producto');
    contenedor.innerHTML = `
      <h2>${producto.title}</h2>
      <img src="${producto.image}" alt="${producto.title}">
      <p><strong>Precio:</strong> $${producto.price}</p>
      <p><strong>Categoría:</strong> ${producto.category}</p>
      <p><strong>Descripción:</strong> ${producto.description}</p>
      
    `;
  
    // Agregar funcionalidad al botón "Comprar"
    const botonComprar = document.getElementById('comprar-btn');
    botonComprar.addEventListener('click', () => {
      alert(`Has comprado: ${producto.title}`);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const idProducto = obtenerParametroURL('id');
    obtenerDetallesProducto(idProducto);
  });
  