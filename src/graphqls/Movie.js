import {gql} from 'apollo-boost';

export const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            medium_cover_image
            isLiked @client
        }
    }
`

export const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            language
            rating
            description_intro
        }
        suggestions(id: $id) {
            id
            medium_cover_image
        }
    }
`

export const TOGGLE_LIKE = gql`    
    mutation toggleLike($id: Int!, $isLiked: Boolean!) {
        toggleLike(id: $id, isLiked: $isLiked) @client
    }
`
