import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props {
    src : string,
    alt? : string,
    className : string
    width? : string
}

const LazyImage : React.FC<Props> = ({src, alt, className, width}) => {
  return (
    <LazyLoadImage  effect="blur" width={width}  placeholderSrc={src} src={src} alt={alt} className={className} />
  )
}

export default LazyImage