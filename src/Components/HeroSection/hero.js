import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;

 
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;


export const TextWrapper = styled.div`

  max-width: 550px;
  margin-top: 10px;
  margin-bottom: 60px;


  @media screen and (max-width: 768px) {
    margin-bottom: 75px;
    margin-top: 60px;

  

  }
`;

export const ImgWrapper = styled.div`

  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};


  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 25px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;



`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 90%;
  vertical-align: middle;
  display: inline-block;
  max-height: 200px;

 
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 500;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 440px) {
    margin-bottom:20px;
    line-height: 1;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};

  @media screen and (max-width: 440px) {
    margin-top:40px;
    margin-bottom:60px;
    line-height: 1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom:0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg =styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

`

export const HeroContent = styled.div`
  
  z-index:3;
  max-width:1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction:column;
  align-items:center;

`
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height:100vh;
  position: relative;
  z-index: 1;

  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    background: linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);
    z-index: 2;
  }
   `