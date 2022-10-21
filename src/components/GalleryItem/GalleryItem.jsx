
import { useState } from "react";

function GalleryItem({ item }) {

    console.log('Here in the GalleryItem ', item);





    return (<>

        
        <li>
            <img src={item.path} style={{ width: 200 }} alt="Dog" />
            <button></button>
        </li>




    </>);
}




export default GalleryItem;