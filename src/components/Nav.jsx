import React from 'react'
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai"
import * as TiIcons from "react-icons/ti"
import { Badge } from "@material-ui/core"

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
    padding: 5px
`

const Input = styled.div`
    border: none;
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
                        <Input> <input /></Input>
                        <AiIcons.AiOutlineSearch style={{color: "lightgrey", fontSize: 18}}/>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>
                        REGISTER
                    </MenuItem>
                    <br/>
                    <MenuItem>
                        LOGIN
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary">
                            <TiIcons.TiShoppingCart />
                        </Badge> 
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Nav
