import { Helmet } from 'react-helmet'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import FeaturesBar  from './components/FeaturesBar'
import Philosophy   from './components/Philosophy'
import Programs     from './components/Programs'
import Fleet        from './components/Fleet'
import Instructor   from './components/Instructor'
import Testimonials from './components/Testimonials'
import Booking      from './components/Booking'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Infinity Motor Training School - Best Driving Classes in Delhi NCR | Vasant Kunj</title>
        <meta name="description" content="Learn driving with confidence at Infinity Motor Training School. Professional driving classes in Vasant Kunj, Delhi. 500+ happy learners. 7-day intensive & 14-day foundation courses. Book now!" />
        <meta property="og:title" content="Infinity Motor Training School - Premium Driving Classes" />
        <meta property="og:description" content="Professional driving instruction from Vipin Choudhary. 500+ successful learners. Book your first lesson today!" />
        <meta name="theme-color" content="#1a1814" />
      </Helmet>
      
      <div className="font-sans bg-cream text-ink">
        <Navbar />
        <Hero />
        <FeaturesBar />
        <Philosophy />
        <Programs />
        <Fleet />
        <Instructor />
        <Testimonials />
        <Booking />
        <Footer />
      </div>
    </>
  )
}
