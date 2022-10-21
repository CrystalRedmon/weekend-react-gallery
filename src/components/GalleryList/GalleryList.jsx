import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({ galleryList }) {

    console.log(galleryList);
    // console.log(galleryList[0].path);

    return (
        <>
         



            <ul>
                {galleryList.map(item =>
                    <GalleryItem
                        key={item.id}
                        item={item}
                    />
                )}

            </ul>








        </>
    )




};




export default GalleryList;



















            // {/* <GalleryItem 
            // item={item}
            // /> */}

            // {/* <ul>
            //     {galleryList.map(item =>
            //         <GalleryItem
            //             key={item.id}
            //             item={item.path}
            //         />

            //     )}

            // </ul> */}



            // </>
            // // {galleryList.map(item => (

            // //     <GalleryItem
            // //         item={item}
            // //     />}

            // // ))