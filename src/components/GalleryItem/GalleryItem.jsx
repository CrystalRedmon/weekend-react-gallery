
import React from 'react';
import { useState } from "react";


function GalleryItem({ item }) {

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


        <div className="image_container">

            {active ?

                (<div>
                    <img onClick={changeHandler} src={item.path} style={{ width: 200 }} alt="Dog" />
                    <br />
                    <button onClick={likeItem}>Love This Image!</button>
                    <p>{likes} Love This Image</p>
                </div>)

                :

                (<div>
                    <div onClick={changeHandler}>{item.description}</div>
                    <br />
                    <button onClick={likeItem}>Love This Image!</button>
                    <p>{likes} Love This Image</p>
                </div>)
            }
        </div>


    </>);
}




export default GalleryItem;