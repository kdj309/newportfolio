import React from 'react'
import './PosterOne.scss'
import { SiDevpost } from "react-icons/si";

export default function PosterOne() {
    return (
        <div className='PosterOne-Container my-2'>
            <div className='p-1'>
                <h2>I will never stop learning and Imporving my craft</h2>
                <center>
                    <SiDevpost color='#ff3f2f' fontSize={45} />
                </center>
            </div>
        </div>
    )
}
