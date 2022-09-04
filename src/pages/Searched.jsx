import React from 'react'
import { useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {

    const [searchedRecipes, setsearchedRecipes] = useState([]);
    let params = useParams();

 const getSearched = async(query) =>{
        


        
        

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${query}`)
        const recipes = await data.json();
        setsearchedRecipes(recipes.results);
        console.log(recipes.results);





    };

    useEffect(() => {
        getSearched(params.search);
       
    }, [params.search]);


  return (
    <Grid>{searchedRecipes.map((item)=> {

        return(<card key = {item.id}>
          <Link to={'/recipe/'+item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          </Link>
        </card> )
    }
        
    
    
    
    
    )}
    
    
    
    </Grid>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;

`;
const card = styled.div`

    img{

        width: 100%;
        border-radius: 2 rem;
    }

    a{
        text-decoration : none;
        padding: 1rem;

    } 
    
    h4{

        text-align: center;
        padding : 1rem;
    }
`

export default Searched