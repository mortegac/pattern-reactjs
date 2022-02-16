const Image = ({ src, alt, type }) => {  
    return (
      <img
        className={`Card__image${type ? " Card__image--" + type : ""}`}
        src={src}
        alt={alt}
      />
    );
  };

  export default Image;