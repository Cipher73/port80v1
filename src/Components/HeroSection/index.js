import React from 'react'
import home from '../../Backgrounds/home.png'

import {
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  HeroBg,HeroContainer,HeroContent, HomeImg
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
        <HomeImg src={home} />
      </HeroBg>
      <HeroContent>
      <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
          
          
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