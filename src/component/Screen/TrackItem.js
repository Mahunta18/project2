import React, { useState } from "react"

export  default function TrackItem(props) {
    const {name,album,preview_url} = props;
    const[audio,setAudio] = useState(null);
    const [playing,setPlaying] = useState(false);
    const [preview,setPreview] = useState(null);

    /* icons */
    const printIcon = (url) => {
        if(!url)
        return <span className="text-danger">N/T</span>;
        if(playing && preview === url)
        return <button className="btn btn-warning btn-sm">Pause</button>;
        return <button className="btn btn-sm btn-success">Play</button>;
    };
     /* player */
     const playAudio = (url) => {
        const myAudio = new Audio(url);
        if(!playing) {
            myAudio.play();
            setPlaying(true);
            setAudio(myAudio);
            setPreview(url);
        } else {
            audio.pause();
            if(preview === url) {
                setPlaying(false);
            } else {
                myAudio.play();
                setAudio(myAudio);
                setPreview(url);
            }
        }
     };

    return(
        <div className="col-md04 mt-2 mb-2">
            <div className="card">
                <img src={album.images[1].url} alt={name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="text-secondary"> {name} </h5>
                    </div>
                    <div className="card-footer">
                    { printIcon(preview_url)}
            </div>
        </div>
    </div>
    )
}