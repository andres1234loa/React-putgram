/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
// este archivo es el archivo principal y que contiene category
/* eslint-disable react/jsx-key */
import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'// estilos
// import { categories } from '../../../api/db.json'// el el objeto se comenta ya que se va a exportar los datos del servideo vercel
// export de forma nombrada
// en la parte de abajo se va a renderizar todas las categorias
export const ListOfCategories = () => {
  // const [categories, setCategorias] = useState(/* mockCategories  se usa cuando se usa cuando se estaba trayendo del import como alias/)
  const [categories, setcategorias] = useState([]) // se coloca un array vacio ya que en la parte de a bajo los estamos mapeando con un array
  useEffect(function () {
    window.fecth('https://petgran-server-andloa.andres1234loa.vercel.app/categories/')
    // https://petga-api-and-bjrozxw7v.vercel.app/categories
      .then(respuesta => respuesta.json())
      .then(res => setcategorias(res))
  }, [])// [] se ejecuta en el primer renderizado)
  // list era un ul pero con los estilos en lo estilos se colocaron el nombre de list
  // Item era u li pero con los estilos se cambio el nombre a Item

  // en la linea de a bajo se va a mostrar una lista o otra dependiendo del valor del parametro que se de
  useEffect(() => {

  })
  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {

        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  // para usar los fragment hay que importarlos y para que se puede evaluar hay que envolverlos en {}
  return (

    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      {renderList()}
      {renderList(true)}
    </Fragment>
  )
}
