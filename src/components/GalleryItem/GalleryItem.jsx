
import Reactb from 'react';
import { useState } from "react";


function GalleryItem({ item, addLike }) {


    const [active, setActive] = useState(true);


    const changeHandler = () => {
        setActive(!active)
    };


    const likeItem = () => {
        addLike(item.id, item.likes);
    };


    return (<>

        <div className="image_container">

            {active ?

                (<div >
                    <img className="change" onClick={changeHandler} src={item.path} style={{ width: 200 }} alt="Dog" />
                    <br />
                    <button onClick={likeItem}>Love This Image!</button>
                    <p>{item.likes} Love This Image</p>
                </div>)

                :

                (<div>
                    <div className="change" onClick={changeHandler}>{item.description}</div>
                    <br />
                    <button onClick={likeItem}>Love This Image!</button>
                    <p>{item.likes} Love This Image</p>
                </div>)
            }
        </div>


    </>);
}




export default GalleryItem;