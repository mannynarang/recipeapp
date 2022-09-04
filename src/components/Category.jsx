import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>

        <Slink to={'/cuisine/Italian'}> <FaPizzaSlice/> 
        <h4>Italian</h4>
        
        </Slink>

        <Slink to={'/cuisine/American'}> <FaHamburger/> 
        <h4>American</h4>
        
        </Slink>

        <Slink to={'/cuisine/Thai'}> <GiNoodles/> 
        <h4>Thai</h4>
        
        </Slink>

        <Slink to={'/cuisine/Japanese'}> <GiChopsticks/> 
        <h4>Japanese</h4>
        
        </Slink>

        




    </List>
  )
}

const List = styled.div`
display : flex;
justify-content: center;
margin: 2 rem 0rem;
`;

const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
border-radius: 50%;
margin-right: 2rem;

width: 6rem;
height: 6rem;
transform:scale(0.8);
text-decoration: none;

cursor:pointer;



h4{

    color:white;
    font-size:0.8rem;
    
}

svg{
    color:white;
    font-size: 5.5rem;
}

&.active{
    background-color:blue;
}

`;



export default Category