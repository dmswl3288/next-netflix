import type { NextPage } from "next"
import Layout from "src/components/layout"
import NowPlaying from "src/components/nowPlaying"
import PopularMovieList from "src/components/popularList"
import TopRatedList from "src/components/topRatedList"
import UpcomingList from "src/components/upcomingList"

const Home: NextPage = () => {
    return (
        <Layout seoTitle="Home">
            <div>
                <div className={`w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center bg-[url('/assets/netflix_bg.jpeg')]`}>
                    <div className="flex flex-col bg-black/[.4] w-full h-full items-center justify-center text-white text-center">
                        <div className="text-[1.75rem] md:text-[3.125rem] font-semibold">영화와 시리즈를 무제한으로.</div>
                        <div className="text-[1.125rem] md:text-[1.625rem]">다양한 디바이스에서 시청하세요.<br />언제든 해지하실 수 있습니다.</div>
                    </div>
                </div>
            </div>
            <div className="px-[5px] md:px-[40px] lg:px-[80px] mt-6">
                <PopularMovieList />
                <TopRatedList />
                <UpcomingList />
                <NowPlaying />
            </div>
        </Layout>
    )
}

export default Home