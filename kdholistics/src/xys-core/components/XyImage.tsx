import { Image, ImageProps } from 'primereact/image'
import React from 'react'

export interface XyImageProps extends ImageProps
{
    displayType?:'basic' | 'small' | 'large' | 'thumbnail'
} 
const XyImage = ({ displayType, ...other }: XyImageProps) =>
{
    const displaySelect = () =>
    {
        switch (displayType) {
            case 'small': return; 
            default: return; 
        }
    }
    displaySelect(); //will remove
    
  return (
      <Image {...other} src={other?.src ? other.src : 'https://raw.githubusercontent.com/XYIANSoftware/images/refs/heads/main/logos_XYIAN/Primary.ico'} alt={other?.alt ? other.alt : 'KD Holistics Image' } />
  )
}

export default XyImage
