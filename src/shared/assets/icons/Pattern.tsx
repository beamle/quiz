import React from 'react'

export const Pattern = ({
  className,
  height,
  width,
}: {
  className?: string
  height: string
  width: string
}) => {
  return (
    <svg height={height} version={'1.1'} viewBox={'0 0 595.276 841.89'} width={width}>
      <defs>
        <clipPath id={'clip_0'}>
          <path
            d={'M587.521 9.124H7.755005V831.89H587.521Z'}
            transform={'matrix(1,0,0,-1,0,841.89)'}
          />
        </clipPath>
        <g id={'pattern_tile_1'}>
          <path
            d={
              'M0 0C0-.343-.275-.621-.614-.621-.952-.621-1.227-.343-1.227 0-1.227 .343-.952 .62-.614 .62-.275 .62 0 .343 0 0'
            }
            transform={'matrix(1,0,0,-1,-5322.408,2624.965)'}
          />
        </g>
        <pattern
          height={'14.8501'}
          id={'pattern_1'}
          patternContentUnits={'userSpaceOnUse'}
          patternUnits={'userSpaceOnUse'}
          width={'14.8363'}
          x={'0'}
          y={'0'}
        >
          <g transform={'matrix(1,0,0,-1,5330.44,2632.3902)'}>
            <use x={'0'} xlinkHref={'#pattern_tile_1'} y={'0'} />
          </g>
        </pattern>
      </defs>
      <g clipPath={'url(#clip_0)'}>
        <rect
          fill={'url(#pattern_1)'}
          height={'822.766'}
          transform={'matrix(1,0,0,-1,-5330.44,2632.3902)'}
          width={'579.7661'}
          x={'5338.195'}
          y={'1799.6242'}
        />
      </g>
    </svg>
  )
}
