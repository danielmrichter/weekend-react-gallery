-- database title: react-gallery

CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/final-1-2.jpg', 'Perspective', 'A lens can make you look at something from a new perspective, even a clothesline.'),
('images/final-01.jpg', 'Chimes', 'Wind Chimes on a still day.'),
('images/final-2-2.jpg', 'Sun Tree', 'The sun shines through a tree'),
('images/final-2.jpg', 'The Golden Horse', 'Bella grazing during a golden sunset.'),
('images/final-3-2.jpg', 'The Head Horse', 'Closeup of Mac'),
('images/final-06.jpg', 'Rise Up!', 'A small flower growing in a pot'),
('images/final-23.jpg', 'Stump', 'A dead tree stump in a pasture.'),
('images/final-24.jpg', 'Red', 'Riley with his favorite red ball'),
('images/final-25.jpg', 'The Tree', 'A tree in hibernation during winter');
  