import fs from 'fs';
import fetch from 'node-fetch';

const url = 'https://fakestoreapi.com/users';



fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    fs.writeFileSync('users.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log('Archivo users.json generado con éxito.');
  })
  .catch((error) => {
    console.error('Error al generar el archivo JSON:', error.message);
  });


