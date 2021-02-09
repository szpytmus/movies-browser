import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Warning } from './warning.svg';

export const Wrapper = styled.div`
margin-top: 200px;
display: grid;
grid-gap: 24px;
grid-template-columns: 1fr;
justify-items: center;
text-align: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    margin-top: 24px;
}

@media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px){
    margin-top: 24px;
    grid-gap: 16px;
}

`;