
import React from 'react';
import { useState } from "react";
/// All of the work is done here on the gallery item. 
/// Call a function in the button that will change the number of likes




function GalleryItem({ item }) {

    console.log('Here in the GalleryItem ', item);

    const [likes, setLikes] = useState(0);
    const [active, setActive] = useState(true);


    const changeHandler = () => {
        setActive(!active)
    }


    const likeItem = () => {
        setLikes(likes + 1)
        console.log('Inside add likes, ', likes);
    };



    return (<>


        <li className="container">

            {active ?

                (<div>
                    <img onClick={changeHandler} src={item.path} style={{ width: 200 }} alt="Dog" />
                    <br />
                    <button onClick={likeItem}>Love This Image!</button>
                    <p>{likes} Love This Image</p>
                </div>)

                :

                (<div>
                    <p onClick={changeHandler} >{item.description}</p>
                    <br />
                    <button onClick={likeItem}>Love This Image!</button>
                    <p>{likes} Love This Image</p>
                </div>)
            }
        </li>


    </>);
}




export default GalleryItem;