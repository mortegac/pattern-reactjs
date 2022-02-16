import { Img, Btn, Heading } from './components';
import { CardStyle } from './components/style';
import variants from './components/variants';

const CardHOC = ( props ) => <CardBase 
    { ...props } 
/>


const CardBase = ({ children, type })=>{
  
    return (
      <>
        <CardStyle
        { ...variants[type || 'default'] }
        >
          {children}
        </CardStyle>
      </>
    );
  }


export const Card = Object.assign(CardHOC, {
  Heading: Heading,
  Button: Btn,
  Image: Img,
})

export default Card;