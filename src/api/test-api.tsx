import { api, BASE_URL, IMAGE_BASE_URL } from 'src/api/api'
import { useQuery } from "react-query"

interface payloadType {
    albumId?: number 
    movie_id?: number
}

export const getMovieList = () => {
    const url = `${BASE_URL}/movie/popular?api_key=89266d25d7d6235cd3f30a363f0b455b&language=ko`
    const fetcher = () => api.callApi({url, method: 'GET'}).then((res) => res.data)
    const { data, isLoading, error } = useQuery('getMovieList', fetcher)

    return { data, isLoading, error }
}

export const getMovieTopRated = () => {
    const url = `${BASE_URL}/movie/top_rated?api_key=89266d25d7d6235cd3f30a363f0b455b&language=ko`
    const fetcher = () => api.callApi({url, method: 'GET'}).then((res) => res.data)
    const { data, isLoading, error } = useQuery('getMovieTopRated', fetcher)

    return { data, isLoading, error }
}

export const getUpcoming = () => {
    const url = `${BASE_URL}/movie/upcoming?api_key=89266d25d7d6235cd3f30a363f0b455b&language=ko`
    const fetcher = () => api.callApi({url, method: 'GET'}).then((res) => res.data)
    const { data, isLoading, error } = useQuery('getUpcoming', fetcher)

    return { data, isLoading, error }
}

export const getNowPlaying = () => {
    const url = `${BASE_URL}/movie/now_playing?api_key=89266d25d7d6235cd3f30a363f0b455b&language=ko&region=KR`
    const fetcher = () => api.callApi({url, method: 'GET'}).then((res) => res.data)
    const { data, isLoading, error } = useQuery('getNowPlaying', fetcher)

    return { data, isLoading, error }
}

export const getMovieDetail = ({movie_id}: payloadType) => {
    const url = `${BASE_URL}/movie/${movie_id}?api_key=89266d25d7d6235cd3f30a363f0b455b&language=ko`
    const fetcher = () => api.callApi({url, method: 'GET'}).then((res) => res.data)
    const { data, isLoading, error } = useQuery('getMovieDetail', fetcher)

    return { data, isLoading, error }
}