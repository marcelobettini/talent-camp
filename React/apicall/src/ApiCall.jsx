import React from 'react'
import { useGet } from './hooks/useGet'


const ApiCall = () => {
    const [data, loading, error] = useGet("character")

    if (loading) return <p>Loading...</p>
    if (error) return <p>Epic fail...</p>
    return (
        <div>ApiCall
            <ul>
                {data && data.map((char) => <li key={char.id}>{char.name}</li>)}
            </ul>

        </div>
    )
}

export default ApiCall