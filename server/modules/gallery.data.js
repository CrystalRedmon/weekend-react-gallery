/// THIS FILE IS BEING USED IN PLACE OF THE DB. 
/// THIIS FILE REPLACES POOL

//// THIS IS WHERE THE PICTURES SHOULD BE STORED IN AN ARRAY


/// [ ] Modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. 


const galleryItems = [
    {
        id: 1,
        path: 'images/yellow_roses.jpg',
        title: 'Beauty Expiring',
        description: 'A bunch of yellow roses on the verge of wilting.',
        likes: 0
    },

    { id: 2, 
        path: 'images/blue_water_lily.jpg', 
        title: 'Water lily',
        description: 'Water lily loveb.', 
        likes: 0 },

    { id: 3, 
        path: 'images/lilly.jpg',
        title:  'Purity',
        description: 'Photo of a beautiful white flower.', 
        likes: 0 },

    { id: 4, 
        path: 'images/pinkflower.jpg', 
        title: 'Oh Happy Day',
        description: 'Close up photo of a happy pink flower', 
        likes: 0 },

    { id: 5, 
        path: 'images/purpleflower.jpg', 
        title: 'Things Are Looking Up',
        description: 'Close up photo of a purple flower with bright yellow center.', 
        likes: 0 },

    { id: 6, 
        path: 'images/treeandsky.jpg', 
        title: 'Greatness',
        description: 'A single tree sitting on a hill with a backdrop of the water and purple sky.', 
        likes: 0 },

];







module.exports=galleryItems;