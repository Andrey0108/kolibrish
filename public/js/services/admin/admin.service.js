// #region atributte
import { signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { loadCategorys, loadProducts } from './productos/products.service.js'
import { loadTableCategorias } from './categorias/category.service.js'
import { pageCategory } from './categorias/pageCategory.js'
import { pageProductos } from './productos/pageProducts.js'
// import { getAllData } from '../services.general.js'
import { localData } from '../local/localData.js'
import { auth } from '../../config/firebase.js'
import { pageAdmin } from './pageAdmin.js'

import { getDataById } from '../services.general.js'

import { saveData } from '../services.general.js'


let btnCategorias
let btnProductos
let categorias
let modules
let logout
let body
let table
const data = localData
let products = []
let dataModules
let form

export const loadAdminPage = async () => {
  const content = document.getElementById('body')
  content.innerHTML = pageAdmin
  if (content) {
    btnCategorias = document.getElementById('btnCategorias')
    btnProductos = document.getElementById('btnProductos')
    modules = document.getElementById('modules')
    logout = document.getElementById('logout')
    body = document.getElementById('body')

    body.classList.remove('bg-linear')
    // data = await getAllData('modulos')
    dataModules = [{
      nombre: 'Categorias',
      descripcion: 'lo que sea',
      img: 'enlace'
    }, {
      nombre: 'Productos',
      descripcion: 'cualquier cosa',
      img: 'enlace'
    }]

    dataModules.forEach((doc) => {
      // const doc = element.data()
      modules.innerHTML += `
      <article>
      <picture class="d-block">
      <img src="${doc.img}" alt="${doc.descripcion}" />
      </picture>
      <button class="btn-md" id="btn${doc.nombre}">${doc.nombre}</button>
      </article>
      `
    })

    logout.addEventListener('click', async (e) => {
      try {
        await signOut(auth)
        location.reload()
      } catch (error) {
        console.log(error)
      }
    })

    btnCategorias.addEventListener('click', () => {
      const content = document.getElementById('content')
      content.innerHTML = pageCategory
      if (content) {
        form = document.getElementById('form')
        table = document.getElementById('table-content')
        loadTableCategorias(table)

        const btnsEdit = table.querySelectorAll('.btn-edit')
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            try {
              const doc = await getDataById(e.target.dataset.id)
              const category = doc.data()
              form.nombre.value = category.nombre
              form.addEventListener('submit', () => {
                const dataCategory = {
                  nombre: form.nombre.value,
                  productos: [],
                  habilitado: true

                }
                updateData(category.id, dataCategory, 'categorias')
              })
            } catch (error) {
              console.log(error)
            }
          })

        form.addEventListener('submit', async (e) => {
          e.preventDefault()

          try {
            if (form.nombre.value !== '') {
              const dataCategory = {
                id: crypto.randomUUID(),
                nombre: form.nombre.value,
                productos: [],
                habilitado: true

              }
              await saveData(dataCategory, 'categorias').then((data) => [console.log('Dato Guardado')])
            }
          } catch (error) {
            console.error(error)
          }

        })
      }
    })

    btnProductos.addEventListener('click', async () => {
      const content = document.getElementById('content')
      content.innerHTML = pageProductos
      if (content) {
        categorias = document.getElementById('categorias')
        table = document.getElementById('table-content')
        // const categorys = await getAllData('categorias')
        products = loadCategorys(data, categorias)

        categorias.addEventListener('change', (e) => {
          loadProducts(e.target.value, products, table)
        })
      }
    })
  }
}

// #endregion

// #region events

// #endregion
