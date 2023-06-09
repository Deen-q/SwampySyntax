// import { eventData } from "../../Data/EventData";



export default function AddEventForm(){
    // const title = [title, setTitle] = useState("");
    // const description = [description, setDescription] = useState("");
    // const date = [date, setDate] = useState("");
    // const time = [time, setTime] = useState("");
    // const location = [location, setLocation] = useState("");
    // const image = [image, setImage] = useState("");
    // const tags = [tags, setTags] = useState("");
    // const link = [link, setLink] = useState("");


// function handleSubmit(event){


//     const newEvent = {
//         title: title,
//         description: description,
//         date: date,
//         time: time,
//         location: location,
//         image: image,
//         // tags: tags,
//         // link: link,
//     }

// const updatedEventData = [...eventData];
// updatedEventData.push(newEvent);
// console.log(updatedEventData);
// }

    return(
        <div>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Title of Event"></input>
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" placeholder="Description of Event"></input>
                <label for="date">Date:</label>
                <input type="date" id="date" name="date"></input>
                <label for="time">Time:</label>
                <input type="time" id="time" name="time"></input>
                <label for="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Location of Event"></input>
                <label for="image">Image:</label>
                <input type="file" id="image" name="image"></input>
                {/* <label for="tags">Tags:</label>
                <input type="text" id="tags" name="tags" placeholder="Tags for Event"></input>
                <label for="link">Link:</label>
                <input type="text" id="link" name="link" placeholder="Link to Event"></input>
                */}
                <input type="submit" value="Submit"></input> 
            </form>
        </div>
    );
}