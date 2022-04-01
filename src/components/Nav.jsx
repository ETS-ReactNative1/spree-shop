import React from 'react'
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai"
import * as TiIcons from "react-icons/ti"
import { Badge } from "@material-ui/core"
import { Link } from "react-router-dom"
import "../App.css"

const Container = styled.div`
    height: 60px;
    background-color: #023047;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-start
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    background-color: white;
`


const Input = styled.input`
    border: none;
    flex: 8;
  padding-left: 20px;
`

const Logo = styled.div`
    font-weight: bold;
  
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer  
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: lightgray;
`


// const input = styled.input `
//  width: 50px;
// `

const Nav = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                    SPREE-SHOP
                    </Logo>
                    <Language></Language>
                </Left>
                <Center>
                <SearchContainer>
                        <Input />
                        <AiIcons.AiOutlineSearch style={{color: "lightgrey", fontSize: 18}}/>
                        {/* <Button>
                            search
                        </Button> */}
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>
                        <Link to="/register" >Register</Link> 
                    </MenuItem>
                    <br/>
                    <MenuItem>
                        <Link to="/login">login</Link>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary">
                            <Link to="/cart">
                            <TiIcons.TiShoppingCart />
                            </Link>
                        </Badge> 
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Nav
