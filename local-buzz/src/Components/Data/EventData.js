import { v4 as uuidv4 } from "uuid";

export const eventData = [
  {
    id: uuidv4(),
    title: "Beer Festival",
    description: "A get together to share local beers from local brewers.",
    date: new Date(2023, 5, 15), // Note: month is zero-based (0-11)
    image: "./Images/Beer-festival-Beer-drinkers-at-Oktoberfest-Munich.jpg",
  },
  {
    id: uuidv4(), 
    title: "Reading Club",
    description:
      "Let's get together and read and discuss educated by Tara Westover",
    date: new Date(2023, 8, 20),
    image: "./Images/ReadingClub.jpeg",
  },
  {
    id: uuidv4(),
    title: "Allotment",
    description:
      "Come and enjoy the sunshine and spend some time with your neighbours",
    date: new Date(2023, 7, 19),
    image: "./Images/AllotmentImage.jpg",
  },
  {
    id: uuidv4(),
    title: "Classic Car",
    description:
      "Bring what's in your garage! Meet like minded car enthusiasts. No car too old or too young. I'll be bringing my Reliant Scimitar",
    date: new Date(2023, 10, 5),
    image: "./Images/Classic Car.jpg",
  },
];
