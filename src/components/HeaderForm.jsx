import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderForm = () => {

    const [category, setCategory] = useState("people")
    const [id, setId] = useState(1)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for: </label>
                <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label> ID: </label>
                <input type='number' name='id' value={id} onChange={e => setId(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default HeaderForm