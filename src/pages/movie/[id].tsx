import type { NextPage } from "next"
import { useRouter } from "next/router"
import { IMAGE_BASE_URL } from "src/api/api"
import { getMovieDetail } from "src/api/test-api"
import Layout from "src/components/layout"

const MovieDetail: NextPage = () => {
    const router = useRouter()
    const movie_id = router.query.id ? +router.query.id : undefined;
    const { data, isLoading, error } = getMovieDetail({movie_id})
    console.log(data)

    if (isLoading) return null
    return (
        <Layout seoTitle={data.title}>
            <div className="text-white max-w-[1600px] mx-auto my-0">
                <div
                    style={{ backgroundImage: `url(${IMAGE_BASE_URL}${data.backdrop_path})` }}
                    className={`w-full h-[250px] sm:h-[300px] md:h-[550px] lg:h-[700px] bg-cover bg-center`}
                >
                    <div className="hidden md:flex flex-col justify-center w-[50%] h-full px-[5px] md:px-[40px] lg:px-[80px] bg-gradient-to-r from-[#181818]">
                        <div className="text-[24px] my-4 font-semibold">{data.title}</div>
                        <div className="flex items-center text-[14px] text-[#a3a3a3] gap-2">
                            <div>{data.release_date.slice(0, 4)}</div>
                            <span>|</span>
                            {data?.genres.map((genre: any, i: number) => {
                                return (
                                    <div key={i}>{genre.name}</div>
                                )
                            })}
                        </div>
                        <div className="mt-4 text-[16px]">{data.overview}</div>
                    </div>
                </div>
                <div className="flex md:hidden flex-col justify-center w-full h-full px-[15px]">
                    <div className="text-[24px] my-4 font-semibold">{data.title}</div>
                    <div className="flex items-center text-[14px] text-[#a3a3a3] gap-2">
                        <div>{data.release_date.slice(0, 4)}</div>
                        <span>|</span>
                        {data?.genres.map((genre: any, i: number) => {
                            return (
                                <div key={i}>{genre.name}</div>
                            )
                        })}
                    </div>
                    <div className="mt-4 text-[16px]">{data.overview}</div>
                </div>
            </div>
        </Layout>
    )
}

export default MovieDetail