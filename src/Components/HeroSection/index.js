import React from 'react'
import Video from '../../Videos/video1.mp4'

import {
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  VideoBg,HeroBg,HeroContainer,HeroContent
} from './hero';
function HeroSection({
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  description2,
  img,
  alt,
  imgStart,
  start
}) {

  return (
  
    <HeroContainer className='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
      </HeroBg>
      <HeroContent>
      <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{description2}</Subtitle>
          
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
          </HeroContent>
    </HeroContainer>
  
  )
}


export default HeroSection