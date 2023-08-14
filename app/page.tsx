'use client'

import axios from "axios";

export default function Home() {
        console.log('AXIOS  ')
        axios.post("http://127.0.0.1:8000/api/get-news/").then(res => {
            console.log(res)
        }).catch(err => console.error(err))
    return (
        <div>
            <p>trying call render..</p>
        </div>
    )
}