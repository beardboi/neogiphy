import Trending from 'components/Trending'
import React from 'react'
import { useState, useEffect } from 'react'
import getTrendings from 'services/getTrendings'
import './styles.css'

/**
 *
 */
export default function Trendings() {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendings().then((trendings) => {
            setTrends(trendings)
        })
    }, [])

    return (
        <div className="Trendings-Container">
            <div className='Trending-Title'>
                <h2>TRENDINGS</h2>
            </div>
            <div className="Trendings">
                {trends.map((trend) => {
                    return <Trending key={trend} trending={trend} />
                })}
            </div>
        </div>
    )
}
