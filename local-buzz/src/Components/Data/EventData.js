import {v4 as uuidv4} from "uuid";
// import image from file
import GardenParty from "../Data/Images/GardenParty.jpeg";
import ReadingClub from "../Data/Images/bookClub.jpg";
import AllotmentImage from "../Data/Images/AllotmentImage.jpg";
import ClassicCar from "../Data/Images/classicCar.jpg";

export const eventData = [
  {
    id: uuidv4(),
    title: "Garden Party",
    description: "A get together to know your neighbours.",
    date: new Date(2023, 5, 15).toLocaleDateString(), // Note: month is zero-based (0-11)
    image: GardenParty,
    firstLineOfAddress: "42 Baker Street",
    city: "London",
    postcode: "NW1 6XE",
    time: "19:00-22:00",
  },
  {
    id: uuidv4(),
    title: "Book Club",
    description:
      "Let's get together and read and discuss educated by Tara Westover",
    date: new Date(2023, 8, 20).toLocaleDateString(),
    image: ReadingClub,
    firstLineOfAddress: "15 Elmwood Road",
    city: "Manchester",
    postcode: "M14 5PA",
    time: "19:00-21:00",
  },
  {
    id: uuidv4(),
    title: "Allotment",
    description:
      "Come and enjoy the sunshine and spend some time with your neighbours",
    date: new Date(2023, 7, 19).toLocaleDateString(),
    image: AllotmentImage,
    firstLineOfAddress: "7 Willow Lane",
    city: "Birmingham",
    postcode: "B12 8QF",
    time: "10:00-12:00",
  },
  {
    id: uuidv4(),
    title: "Classic Car",
    description:
      "Bring what's in your garage! Meet like minded car enthusiasts. No car too old or too young. I'll be bringing my Reliant Scimitar",
    date: new Date(2023, 10, 5).toLocaleDateString(),
    image: ClassicCar,
    firstLineOfAddress: "29 Rosemary Avenue",
    city: "Edinburgh",
    postcode: "EH10 6TR",
    time: "10:00-12:00",
  },
];
