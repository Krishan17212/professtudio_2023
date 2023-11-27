import HeroBanner from '../../components/heroBanner/HeroBanner'
import Popular from './popular/Popular'
import './style.scss'
import TopRated from './topRated/TopRated'
import Trending from './trending/Trending'

const Home = () => {
  return (
    <>
    <section className='heroPage'>
    <HeroBanner />
    <Trending />
    <Popular />
    <TopRated />
    </section>
    </>
  )
}

export default Home
