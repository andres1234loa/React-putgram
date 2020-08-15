
import * as React from 'react'
import { Svg } from './styles'
export const Logo = (props) => {
  return (
    <Svg
      width={169.26}
      height={122.021}
      viewBox='165.37 13.989 169.26 122.021'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-gradow-gradient'
          x1={0.742}
          x2={0.258}
          y1={0.063}
          y2={0.937}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#b500b5' />
          <stop offset={1} stopColor='#22cece' />
        </linearGradient>
        <filter
          id='prefix__editing-gradow-filter'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feFlood floodColor='#c5c4b4' result='flood' />
          <feComposite
            operator='in'
            in2='SourceAlpha'
            in='flood'
            result='shadow'
          />
          <feOffset dx={0.9} dy={-2.8} in='SourceGraphic' result='offset-1' />
          <feOffset dx={-0.9} dy={2.8} in='shadow' result='offset-2' />
          <feMerge>
            <feMergeNode in='offset-2' />
            <feMergeNode in='offset-1' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#prefix__editing-gradow-filter)'>
        <path
          d='M21.12-17.98q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02L12.8 0-.45 1.28l6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.72 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.6 2.49-7.01 2.49-1.92 0-2.69-.76zm39.23 7.16q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zM47.3-17.79q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm41.34-16.13q2.3 0 4.1.51.06-.25.19-.96l.32-1.98q.25-1.28.64-3.39l1.02-5.06 12.74-1.28-7.11 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.71 1.06 1.86 1.06Q101.76-.38 97.86.9q-1.35.38-3.24.38-1.88 0-3.61-.99t-2.24-2.66Q87.74-.7 85.7.29q-2.05.99-5.03.99-2.97 0-5.44-.77-2.46-.77-4-2.43-2.81-3.26-2.81-10.69 0-9.6 5.63-15.42 5.63-5.89 14.59-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.02-5.44l3.45-18.75q-1.34-1.15-3.71-1.15z'
          fill='url(#prefix__editing-gradow-gradient)'
          transform='translate(196.697 98.672)'
        />
      </g>
      <style />
    </Svg>
  )
}
