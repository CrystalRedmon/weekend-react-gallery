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



















