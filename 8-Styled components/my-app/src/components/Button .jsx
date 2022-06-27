import "./button.css";
import styled from "styled-components";

// export const Button = ({children, onClick }) => {

//     return (
//         <button onClick={onClick} className="btn">{children}</button>
//     );
// };


const Button = styled.button`
    background-color: ${(props) => (props.theme==="light" ? "#ff8800" : "#191950")};
    border: none;
    color: white;
    border-radius: 4px;
    padding-top: 8px;
    padding: 10px;
    text-align: center;
    margin: 10px;

&:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`;

export {Button};