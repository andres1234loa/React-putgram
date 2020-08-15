import styled from 'styled-components'
import { fadeIn } from '../style/animation'

export const ImgWrapper = styled.div`
    border-radius:10px;
    display:block;
    height:0;
    overflow:hidden;
    padding:56.25% 0 0 0;
    position:relative;
    width:100%;
`

export const Img = styled.img`
     /*aqui se ejecuta la constante que tiene el fadeIn la que anterios esba definido en esta script*/
    ${fadeIn({ time: '5s' })}
    box-shadow: 0 10px 14px rgba(0,0,0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;

`
export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    /*& svg se refiere al  selector dentro de button */
    & svg {
        margin-right: 4px;
    }
`
