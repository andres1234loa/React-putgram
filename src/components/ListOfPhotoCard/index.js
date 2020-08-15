/* eslint-disable react/jsx-no-undef */
// este scrit va contener los photoCard, como paso el listOfCatogiryes
/* eslint-disable no-unused-expressions */
import React from 'react'
import { PhotoCard } from '../PhotoCard'
// cuando se inserta elementos de javascript dentro del return se debe encerrar con {}
export const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3].map(id => <PhotoCard key={id} />)}
    </ul>
  )
}
