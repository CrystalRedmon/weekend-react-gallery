
import React from 'react';
import { useState } from "react";
/// All of the work is done here on the gallery item. 
/// Call a function in the button that will change the number of likes




function GalleryItem({ item }) {

    console.log('Here in the GalleryItem ', item);

    const [likes, setLikes] = useState(0);


    const likeItem = () => {
        setLikes(likes + 1)
        console.log('Inside add likes, ', likes);
    };



    return (<>


        <li>
            <img src={item.path} style={{ width: 200 }} alt="Dog" />
            <br />
            <button onClick={likeItem}>Love This Image!</button>

            <p>{likes} Love This Image</p>
        </li>




    </>);
}




export default GalleryItem;