import React from 'react'
import Search from '../../Organism/Search/search'
import background from '../../source/images/background2.jpg'
import './home.scss'

const Home = () => {
  return (
    <div className='wrap-home'>
        <header className='header-home'>
            <h1><q>Once Gooner, Always a Gooner</q></h1>
            <img src={background} alt='bc'/>
            <Search/>
        </header>
        <main>

        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Home