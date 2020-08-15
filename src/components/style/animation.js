import { css, keyframes } from 'styled-components'
const fadeInKeyframes = keyframes`
    from{
        filter:blur(15px);
        opacity:0;
    }
    to{
        filter:blur(0);
        opacity:1
    }
`
// el fedeIn en es un keyframe
// en el caso de que no se pase ningun parametro que el valor por defecto de todo nuestros parametro es un efecto= {}
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css` animation: ${time} ${fadeInKeyframes} ${type};`
