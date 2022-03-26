import type { NextPage } from "next"
import { IMAGE_BASE_URL } from "src/api/api"
import { getMovieList } from "src/api/test-api"

const APITEST: NextPage = () => {
    const { data, isLoading, error } = getMovieList()
    console.log(data)
    
    return (
        <div>
            {data && 
                data.results.map((item: any, idx: number) => {
                    return (
                        <div key={idx}>
                            <img 
                                src={`${IMAGE_BASE_URL}${item.poster_path}`} 
                                width={100}
                            />
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default APITEST