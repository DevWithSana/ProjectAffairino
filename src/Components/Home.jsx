import banner from '../assets/banner.jpg'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
       <Banner banner={banner} heading="Créez facilement vos devis en quelques clics." subheading="Générez des devis professionnels et
        partagez-les avec vos clients." btn1={'Créer un devis'}/>
    </div>
  )
}

export default Home