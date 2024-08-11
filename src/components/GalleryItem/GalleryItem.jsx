import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Paper, Typography } from "@mui/material";
import Axios from "axios";
import { useState } from "react";


export default function GalleryItem({ item, getGallery }) {
    const [flipImage, setFlipImage] = useState(false)
    const [isFavorited, setIsFavorited] = useState(false)

    const handleLikeButton = () => {
        Axios.put(`/api/gallery/like/${item.id}`, { num: (isFavorited ? -1 : 1) })
            .then(res => {
                getGallery()
                setIsFavorited(!isFavorited)
            })
            .catch(err => { console.log(`Error in PUT/api/gallery/like/:id!`, err) })
    }
    const handleDeleteButton = () => {
        Axios.delete(`/api/gallery/${item.id}`)
            .then(res => { getGallery() })
            .catch(err => { console.log(`Error deleting iteM:`, err) })
    }

    const itemText = (
        <>
            <Typography>{item.title}</Typography>
            <Typography>{item.description}</Typography>
        </>)
    const itemPicture = (
        <CardMedia
            component='img'
            src={item.url}
            loading="lazy"
            alt={item.title}
            sx={{
                boxShadow: 3
            }}
        />
    )
    return (
        <Card sx={{ maxWidth: 250 }} raised={true} data-testid="toggle" onClick={() => setFlipImage(!flipImage)}>
            <CardActionArea>{itemPicture}</CardActionArea>
            <CardActions>
                {isFavorited ? <Favorite data-testid="like" onClick={handleLikeButton}/> : <FavoriteBorder data-testid="like" onClick={handleLikeButton}/>}
                <Typography>{item.likes}</Typography>
            </CardActions>
            <Button variant='contained' onClick={handleDeleteButton}>Delete Item</Button>
        </Card>
    )
}
