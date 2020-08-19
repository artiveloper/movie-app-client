import React from 'react'
import {useParams} from 'react-router-dom'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`

const Detail = () => {

    let {id} = useParams()
    id = parseInt(id)

    const {loading, error, data} = useQuery(
        GET_MOVIE, {
            variables: {id}
        }
    )

    if (loading) {
        return "loading"
    }

    if(data && data.movie) {
        return data.movie.title
    }
}

export default Detail
