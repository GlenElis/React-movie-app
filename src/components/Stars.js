import React from "react";
import { useState, useEffect } from "react";
import { Rating } from "@mui/material";


const StarRating = () => {

    return (
        <>
  <Rating 
  name="movie-rating" 
  defaultValue={0} 
  precision={0.5} />
</>)};


  export default StarRating

