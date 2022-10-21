import styled from 'styled-components';
/*import Ods2 from './assets/ods2.png';
import Ods3 from './assets/ods3.jpg';
import Ods15 from './assets/ods15.png';*/

export const ContainerAll = styled.section`
display:flex;
flex-direction:column;
align-items:center;
`

export const Onu = styled.img`
width:40%;
height:250px;
`

export const Descricao = styled.p`
width:75%;
color:blue;
`

export const Htwo = styled.h2`
color:blue;
`

export const ContainerTargets = styled.div`
width:75%;
height:300px;
display:flex;
justify-content:space-evenly;
`

export const ContainerOds = styled.button`
width:250px;
height:250px;
border:none;
background-color:transparent;
display:flex;
align-items:center;
justify-content:center;
&:focus{
    border:none;
}
`

export const Ods = styled.img`
width:200px;
height:200px;
border-radius:10%;
&:hover{
    cursor:pointer;
    width:250px;
    height:250px;
}
`