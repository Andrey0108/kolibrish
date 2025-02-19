export const pageProductos = [
  '<section class="grid">',
  '<article>',
  '<form>',
  '<fieldset>',
  '<legend>Crear producto</legend>',
  '<article>',
  '<label>',
  'Categorias:',
  '<select id="categorias">',
  '<option selected>Seleccionar</option>',
  '</select>',
  '</label>',
  '<label>',
  'Nombre:',
  '<input type="text" id="nombre-producto" placeholder="Faldas" />',
  '</label>',
  '<label>',
  'Descripcion:',
  '<textarea id="descripcion-producto" class="input"></textarea>',
  '</label>',
  '<label>',
  'Sexo:',
  '<select id="sexo">',
  '<option selected>Seleccionar</option>',
  '<option value="m">Masculino</option>',
  '<option value="f">Femenino</option>',
  '<option value="u">Unisex</option>',
  '</select>',
  '</label>',
  '</article>',
  '<article>',
  '<label>',
  '<input',
  'type="file"',
  'id="imagen-producto"',
  'accept="image/*"',
  'placeholder="Subir imagen"',
  '/>',
  '<picture>',
  '<source type="image/avif" srcset="image.avif" />',
  '<source type="image/webp" srcset="image.webp" />',
  '<img',
  'src="./assets/IMG-20240205-WA0033.jpg"',
  'alt="Logo de la empresa"',
  '/>',
  '</picture>',
  '</label>',
  '</article>',
  '</fieldset>',
  '<div class="buttons">',
  '<button class="btn-blue btn-sm">💾 Guardar</button>',
  '<button class="btn-blue btn-sm">📃 Nuevo</button>',
  '<button class="btn-blue btn-sm">🔍 Consultar</button>',
  '</div>',
  '</form>',
  '</article>',
  '<article>',
  '<fieldset>',
  '<legend>Productos</legend>',
  '<table>',
  '<thead>',
  '<tr>',
  '<th>Nombres</th>',
  '<th>Descripcion</th>',
  '<th>Habilitado</th>',
  '<th>Acciones</th>',
  '</tr>',
  '</thead>',
  '<tbody id="table-content"></tbody>',
  '</table>',
  '</fieldset>',
  '</article>',
  '</section>',
  '<script src="../js/services/productos/productos.js" type="module"></script>'
].join('')
