import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link,useParams} from 'react-router-dom';
import { useState } from "react";
import {useEffect} from "react";


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async(name) =>{
        console.log(name)
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
        console.log(recipes.results);
        localStorage.setItem("recipes", JSON.stringify(recipes.results));



    };


    useEffect(() => {
        getCuisine(params.type);
        
      }, [params.type]);


  return (

   

    //<Grid>
<Grid
animate={{opacity:1}}
initial={{opacity:0}}
exit={{opacity:0}}
transition= {{duration: 0.5}}
>
        
        {cuisine.map((item) =>{

            return(
      
            <card key={item.id}>
                <Link to={'/recipe/'+item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>

            </card>

           
            )

        })}

</Grid>

//</Grid>
    
    
    
    
    
  )
}


const Grid = styled(motion.div)`
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

export default Cuisine