import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList({ galleryList, addLike}) {


    return (
        <>
            {galleryList.map(item =>
                <GalleryItem
                    key={item.id}
                    item={item}
                    addLike={addLike}
                
                />
            )}
        </>
    )


};



export default GalleryList;



















