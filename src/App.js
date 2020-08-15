// este archivo es el archivo principal y contenedor  de los demas contienn ListOfCategories
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'// es el componente que inporamos
import { GlobalStyle } from './components/style/GlobalStyles'// estos son los estilos globales no son personalizados
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
// NOTA CUANDO SE ESTA DEVOLVIENDO DOS COMPONENTES  HAY QUE ENVOLVERLOS EN UN DIV
export const App = () => (
  <div>
    <Logo />
    <GlobalStyle /> {/* son los etilos globales */}
    <ListOfCategories /> {/* son las listas de imagenes que aparecen en la parte de arriba de la aplicacion */}
    <ListOfPhotoCard />{/* son las listas verticales, las imagenes grandes  */}
  </div>
)
