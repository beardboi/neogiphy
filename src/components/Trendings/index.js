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
            console.log(trendings)
        })
    }, [])

    return (
        <div className="Trendings-Container">
            <div>
                <h2 className="text-white font-bold">TRENDINGS</h2>
            </div>
            <div className="Trendings">
                {trends.map((trend) => {
                    return <Trending trending={trend} />
                })}
            </div>
        </div>
    )
}
