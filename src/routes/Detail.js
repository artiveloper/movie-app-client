import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import Movie from '../components/Movie';
import {GET_MOVIE} from '../graphqls/Movie';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 28px;
`

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`

const SuggestionMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
`

const Detail = () => {

    let {id} = useParams()
    id = parseInt(id)

    const {loading, error, data} = useQuery(GET_MOVIE,
        {
            variables: {id}
        }
    )

    return (
        <>
            <Container>
                <Column>
                    <Title>{loading ? "Loading..." : data.movie.title}</Title>

                    {
                        !loading && (
                            <>
                                <Subtitle>{data?.movie.language} · {data?.movie.rating}</Subtitle>
                                <Description>{data?.movie.description_intro}</Description>
                            </>
                        )
                    }
                </Column>
                <Poster bg={data?.movie.medium_cover_image}/>
            </Container>
            <SuggestionMovies>
                {data?.suggestions?.map(m => (
                    <Movie key={m.id} id={m.id} bg={m.medium_cover_image}/>
                ))}
            </SuggestionMovies>
        </>
    );

}

export default Detail
