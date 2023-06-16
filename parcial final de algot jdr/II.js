function crearObjetoTenis(nombre, marca, precio, talla, color) {
    return {
      nombre: nombre,
      marca: marca,
      precio: precio,
      talla: talla,
      color: color
    };
  }
  
  var tenis = [
    crearObjetoTenis("Tenis 1", "Nike",230000 , "M", "Negro"),
    crearObjetoTenis("Tenis 2", "Adidas",540000 , "L", "Blanco"),
    crearObjetoTenis("Tenis 3", "Puma",321000 , "S", "Rojo"),
    crearObjetoTenis("Tenis 4", "Reebok",400000 , "XL", "Azul")
  ];
  
  console.log(tenis);
  
  