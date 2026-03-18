import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MohalePillar from './components/MohalePillar'
import TripleTheme from './components/TripleTheme'
import ESGHub from './components/ESGHub'
import Speakers from './components/Speakers'
import Registration from './components/Registration'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MohalePillar />
        <TripleTheme />
        <ESGHub />
        <Speakers />
        <Registration />
      </main>
      <Footer />
    </>
  )
}
