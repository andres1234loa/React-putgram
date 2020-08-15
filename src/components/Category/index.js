import React from 'react'
import { Anchor, Image } from './style'// estos son estilos
// const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'// esto es un imagen de un servidor
// emoji='?' es un valor por defecto , es decir que si no  se pasa un parametro se puede, su valorseria ese mismo
// path es el que le va indicar hacia adonde tiene que  ir cada vez que le indicamos una categoria
// emijinos va a indentificar cada una de las categorias
export const Category = ({ cover, path, emoji = '?' }) => (// el digo que va dentro de las {} son los parmetros que vamos a esperar
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
