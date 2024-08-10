import { useState } from "react";
import Axios from "axios";


export default function PostImageForm() {
    const [titleInput, setTitleInput] = useState(``)
    const [descriptionInput, setDescriptionInput] = useState(``)
    const [imageInput, setImageInput] = useState(``)

    const handleFormSubmit = () => {
        Axios.post(`/api/gallery`, {
            title: titleInput,
            description: descriptionInput,
            url: imageInput})
        .then(res => {
            getGallery()
        })
        .catch(err => {
            console.log(`Error posting form!`, err)
        })
    }

    return(
    <form onSubmit={handleFormSubmit}>
        <input 
        type="text" 
        placeholder="Title" 
        value={titleInput}
        onChange={(e) => {setTitleInput(e.target.value)}}
        />
        <input 
        type="text" 
        placeholder="Description"
        value={descriptionInput}
        onChange={(e) => {setDescriptionInput(e.target.value)}}/>
        <input 
        type="url" 
        placeholder="Image URL"
        value={imageInput}
        onChange={(e) => {setImageInput(e.target.value)}} />
        <button>Submit</button>
    </form>
    )
}