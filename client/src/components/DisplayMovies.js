import React from 'react'

import{useQuery, gql} from '@apollo/client'

const QUERY_ALL_MOVIES = gql`
query movies {
    movies{
        name
        yearOfPublication
    }
}

`

const DisplayMovies = () => {
    const {data} = useQuery(QUERY_ALL_MOVIES)
    console.log(data);
  return (
    <div>
        {
            data && data.movies.map((movie)=>{
                return <h3>{movie.name}</h3>
            })
        }
    </div>
  )
}

export default DisplayMovies