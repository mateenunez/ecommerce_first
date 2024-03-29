import styled from "styled-components"

const StyledInput = styled.input`
width: 100%;
padding: 5px;
`;

export default function Input(props){

    return <StyledInput {...props} />
}