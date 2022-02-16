import './initial.css';

const Card = ({children})=>{
  
    return (
        <div className="Card">
          {children}
        </div>
    );
  }



// Heading component (sub component)
const Heading = ({children})=>{
    return (
      <h2
        className={ "Card__heading"}>
        {children}
      </h2>
    );
  }
  Card.Heading = Heading;


  // Button component (sub component)
const Button = ({ children }) => {
  
    return (
      <button className="Card__button">
        {children}
      </button>
    );
  }
  Card.Button = Button;
  
  // Image component (sub component)
  const Image = ({ src, alt, type }) => {  
    return (
      <img
        className={`Card__image${type ? " Card__image--" + type : ""}`}
        src={src}
        alt={alt}
      />
    );
  }
  Card.Image = Image;



export default Card;