import { Img, Btn, Heading } from './components';
import './initial.css';

const Card = ({ children })=>{
  
    return (
        <div className="Card">
          {children}
        </div>
    );
  }


  Card.Heading = Heading;
  Card.Button = Btn;
  Card.Image = Img;

export default Card;