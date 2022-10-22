import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({ galleryList }) {


    return (
        <>
            {galleryList.map(item =>
                <GalleryItem
                    key={item.id}
                    item={item}
                />
            )}
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