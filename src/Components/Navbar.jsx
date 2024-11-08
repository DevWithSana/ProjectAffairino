import { useState } from 'react';
import Logo from '../assets/Logo.png'
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';
import SignupButton from './SignupButton';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {link: "Home", path: "#home"},
        {link: "Feature", path: "#feature"},
        {link: "Devis", path: "#devis"},
        {link: "Pricing", path: "#pricing"},
    ]
    

    
    return(
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
          <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center '>
                <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary" >
                <img src={Logo} alt="" className="w-10 inline-block items-center"/><span>Affairino</span>
                </a>
                {
                    /* showing navitem using map */
                    <ul className='md:flex space-x-12 hidden'>
                        {
                        navItems.map(({ link, path }) => (
                                 <Link
                                   key={link}
                                   to={path.replace("#", "")}  // Enlevez le "#" pour que 'to' corresponde à l'id des <div>
                                   smooth={true}
                                   duration={500}
                                   offset={-70}  // Ajustez selon la hauteur de votre navbar
                                   className='block hover:text-gray-300 cursor-pointer'>
                                 {link}
                                 </Link>
                                ))
                                }

                    </ul>
                }
            </div>
            {/* langage and signup */}
            <div className='space-x-12 hidden md:flex items-center'>
               <SignupButton />
            </div>

              {/* menu btn only dispalay on mobile */}
              <div className='md:hidden'>
                  <button onClick={toggleMenu} className='text-white  focus: outline-none focus:text-gray-300'>
                    {
                        isMenuOpen ? (<FaXmark className='w-6 text-primary'/>) : (<FaBars
                             className='w-6 h-6 text-primary '/>)
                    }
                  </button>
              </div>
          </div>
        </nav>

        <div className={`space-y-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                            navItems.map(({link,path}) => <a key={link} href={path} className='block 
                            hover:text-gray-300'>{link}</a>)
                        }

        </div>
        </>

    )
}

export default Navbar;