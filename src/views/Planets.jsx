import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planets = () => {

    const [planet, setPlanet] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanet(response.data);
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                planet ?
                    <div>
                        <h1>{planet.name}</h1> 
                        <p><strong>Climate:</strong> {planet.climate}</p>
                        <p><strong>Terrain:</strong> {planet.terrain}</p>
                        <p><strong>Surface Water:</strong> {planet.surface_water}</p>
                        <p><strong>Population:</strong> {planet.population}</p>
                    </div> :
                    <h3>These are not the droids you are looking for</h3>
            }
        </div>
    )
}

export default Planets