-- // database name react_gallery


CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR,
    "title" VARCHAR (100), 
    "description" VARCHAR (100),
    "likes" INT
);


INSERT INTO "gallery"
    ("path", "title", "description", "likes")
VALUES
    ('images/yellow_roses.jpg',
        'Beauty Expiring',
        'A bunch of yellow roses on the verge of wilting.',
        0), 
    ('images/blue_water_lily.jpg', 
        'Water lily',
        'Water lily loveb.', 
        0 ),
    ('images/lilly.jpg',
        'Purity',
        'Photo of a beautiful white flower.', 
        0),
    ('images/pinkflower.jpg', 
        'Oh Happy Day',
        'Close up photo of a happy pink flower', 
        0), 
    ('images/purpleflower.jpg', 
        'Things Are Looking Up',
        'Close up photo of a purple flower with bright yellow center.', 
        0),
    ('images/treeandsky.jpg', 
        'Greatness',
        'A single tree sitting on a hill with a backdrop of the water and purple sky.', 
        0)
        ;

