import styled from "styled-components";

const Title = styled.h1 `
    text-align: center;
    font-size: 48px;
    color: black;
    margin-top: 48px;
`
const Image = styled.img `
    width: ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
    margin: 0 auto;
    display: block;
`
export { Title, Image }