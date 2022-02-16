import styled from "styled-components";

export const CardStyle = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    max-width: 400px;
    background: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    border: 1px solid;
    border-width: ${(props) => props.borderWidth};
    border-style: ${(props) => props.borderStyle};
    border-color: ${(props) => props.borderColor};
  

    .Card__heading {
      font-size: 1.2rem;
      margin: 20px;
    }
    
    .Card__button {
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      margin: 20px;
      background: ${(props) => props.buttonBgColor};
      color: ${(props) => props.buttonTextColor};
    }
    .Card__button:active {
      background-color: rgb(255, 65, 163);
    }
    
    .Card__image {
      width: 100%;
    }
    .Card__image--avatar {
      float: left;
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 15px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
    .Card__image--background {
      position: absolute;
      top:0;
      left:0px;
      object-fit: cover;
      opacity: 0.25;
    }

`;