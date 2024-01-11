import styled from "styled-components"

const StyledFormBtn = styled.button`
background-color: #010001;
padding: 8px 18px;
color: #ffff;
border: 1px solid white;
margin: .5rem 0 0 0;
border-radius: 5px;
cursor: pointer;

`;

export default function FormBtn({children}, props){
    return <StyledFormBtn {...props}>{children}</StyledFormBtn>
}