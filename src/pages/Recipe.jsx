import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const [activeTab,setactiveTab]=useState("instructions");
    let params = useParams();


    const fetchDetails=async() => {
    

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    
    console.log(data);
    const detailData= await data.json();
    console.log('hello'+detailData);  
    setRecipe(detailData);

}


useEffect(() => {
    fetchDetails();

  },[params.id]);


  return (
    <DetailWrapper>
   
    <div>
        <h2> {recipe.title}</h2>
        <img src={recipe.image} alt=""/>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active': ' '} onClick={()=> setactiveTab('instructions')}>Instruction</Button>
            <Button className={activeTab === 'ingredients' ? 'active': ' '} onClick={()=> setactiveTab('ingredients')}>Ingredients</Button>
        
      {activeTab === 'instructions' && (
        <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions}}></h3>
        </div> 
        )}

        {activeTab === 'ingredients' && (
        <ul>
            
         {recipe.extendedIngredients.map((ingredient) =>(
       <li key={ingredient.id}>{ingredient.original}</li>
       
       ))}  

   </ul> 
        )}
        
        </Info>
    </div>

    </DetailWrapper>
  )

}

const DetailWrapper=styled.div`
margin-top: 10 rem;
margin-bottle: 5 rem;
display:flex;
h2{
    margin-bottom:2 rem;
}
.active{
 color : blue;
}
li{

    font-size: 1.2 rem;
    line-height : 2 rem;

}
ul{

    margin-top:2 rem;
}
`;

const Button =styled.button`
padding: 1 rem 2rem;
color : 313131;
background : white;
border:2px solid black;
margin-right: 2rem;
font-weight: 600;
`;

const Info = styled.div`
margin-left: 10rem;
`;

export default Recipe