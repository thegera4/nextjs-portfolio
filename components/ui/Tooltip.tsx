import { FC, ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode,
  tooltip?: string
}

function Tooltip({ children, tooltip }: Props) {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={container}
      onMouseEnter={(clientX) => {
        if(!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();
        tooltipRef.current.style.left = (parseInt(clientX.toString()) - left) + 'px';
      }}
      className='group relative inline-block z-9999'
    >
      {children}
      <span ref={tooltipRef} className='invisible group-hover:visible opacity-0
      group-hover:opacity-100 transition bg-green-800 text-white p-1 rounded
      absolute  left-1/2 transform -translate-x-1/2 -translate-y-3'
      >
        {tooltip}
      </span>
    </div>
  )
}

export default Tooltip