import Link from "next/link"
import { IMAGE_BASE_URL } from "src/api/api"
import { getUpcoming } from "src/api/test-api"

const UpcomingList = () => {
    const { data, isLoading, error } = getUpcoming()
    console.log(data)
    return (
        <div className="py-6 md:py-12">
            <div className="text-white text-lg font-semibold">개봉 예정 영화</div>
            <div className="flex overflow-scroll pt-[1rem] pl-2 gap-2.5 md:gap-5">
                {data?.results.map((movie: any, i: number) => {
                    return (
                        <Link href={`/movie/${movie.id}`} key={i}>
                            <div className="cursor-pointer">
                                <div
                                    style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.poster_path})` }}
                                    className={`w-[100px] h-[160px] md:w-[160px] md:h-[250px] lg:w-[160px] lg:h-[250px] rounded-xl bg-cover bg-center hover:scale-110 transition duration-500`}
                                />
                                <div className="text-white text-[0.9rem] mt-4">{movie.title}</div>
                            </div>
                        </Link>
                    )
                })}
                <div className="ml-[100px]" />
                <div className="absolute bg-gradient-to-l from-[#181818] min-w-[200px] h-[300px] -mt-4 right-0 pointer-events-none"></div>
            </div>
        </div>
    )
}

export default UpcomingList