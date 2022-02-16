import './initial.css';

const Initial = ({
    heading='',
    textButton='',
    type='',
    src='',
    alt='',
})=>{

    return(
        <>
            <div className="Card">

                <h2 className="Card__heading">{heading} </h2>
                <img
                    className={`Card__image${type ? " Card__image--" + type : ""}`}
                    src={src}
                    alt={alt}
                />
                <button className="Card__button">{textButton}</button>

                
            </div>    
        </>
    )

}

export default Initial;