import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: orange;
position: relative;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
border-radius: 50px;
justify-content: center;
align-items: center;
background-color: lightgrey;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
opacity: 0.5;
cursor: pointer;
`

const Wrapper = styled.div`
height: 100%;
`

const ImgContainter = styled.div`
height: 100%;
`

const InfoContainer = styled.div`
height: 100%;
`

const Slide = styled.div`
height: 100%;
`



const Slider = () => {
    return (
        <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
            
        </Container>
    )
}

export default Slider
