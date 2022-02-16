import { Img, Btn, Heading } from './components';
import { CardStyle } from './components/style';
import variants from './components/variants';

const Card = ( props ) => <CardBase 
    { ...props } 
/>


const CardBase = ({ children, type })=>{
  
    return (
      <>
      {/* <span>{JSON.stringify(variants[type])}</span> */}
        <CardStyle
        { ...variants[type || 'default'] }
        >
          {children}
        </CardStyle>
      </>
    );
  }


  Card.Heading = Heading;
  Card.Button = Btn;
  Card.Image = Img;

export default Card;