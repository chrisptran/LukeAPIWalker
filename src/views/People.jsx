import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const People = () => {

    const [person, setPerson] = useState("");
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            setPerson(response.data);
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                person ? 
                <div>
                    <h1>{person.name}</h1>
                    <p><strong>Height:</strong> {person.height} cm</p>
                    <p><strong>Mass:</strong> {person.mass} kg</p>
                    <p><strong>Hair Color:</strong> {person.hair_color}</p>
                    <p><strong>Skin Color:</strong> {person.skin_color}</p>
                </div> :
                <h3>These are not the droids you are looking for </h3>
            }
        </div>
    )
}

export default People