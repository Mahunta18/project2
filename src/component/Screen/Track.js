import React, { useEffect,useState } from "react"
import api from '../../API/api'
import { useParams } from "react-router-dom";
import TrackItem from './TrackItem';

const URL="https://api.spotify.com";

const myHeaders = new Headers({
    "Access-Control-Allow-Origin" :"http://localhost:3000",
    "Access-Control-Allow-methods" :"GET",
    "Access-Control-Allow-Headers" :"Content-Type"
});
myHeaders.append("Authorization", `${api.token}`)

const httpReq = {
    method:"GET",
    headers: myHeaders,
    redirect: "follow"
};

export default function Track(props) {
    const [track,setTrack] = useState([]);
    const params = useParams(); // used to read the ref query from router path
    console.log('params =', params);

    useEffect(() => {
        fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`, httpReq)
        .then(out => out.json())
        .then(res => {
            console.log('track data', res);
            setTrack(res.tracks)
        }).catch(err => console.log(err.message));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Tracks</h3>
                </div>
            </div>

            <div className="row">
                {
                    track.map((item,key) => {
                        return <TrackItem key={key} {...item} />
                    })
                }
            </div>
        </div>
    )
}