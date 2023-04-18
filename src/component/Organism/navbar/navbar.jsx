import React, { useState } from 'react'
import {NavLink, Link, useParams, useNavigate} from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import './navbar.scss'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleChange =(e)=>{
    const {target} = e;
    setSearch(target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(search !== ''){
      navigate(`news-app/search/${search}`)
      setSearch('')
    }else{
      return null
    }
  }
  return (
    <nav className='navbar'>
      <div className="top">
      <div className="left">
          <span>
            <HiOutlineMenuAlt2/>
          </span>
          <form className='searchInput' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search News' value={search} onChange={handleChange}/>
            <button><CiSearch/></button>
          </form>
        </div>
        <div className="center">
          <h1><Link to={'news-app/'}>.PmngksNews</Link></h1>
        </div>
        <div className="right">
          <span>
            Get Notification
          </span>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li><NavLink to="news-app/category/business">Bussiness</NavLink></li>
          <li><NavLink to="news-app/category/sports">Sports</NavLink></li>
          <li><NavLink to="news-app/category/entertainment">Entertainments</NavLink></li>
          <li><NavLink to="news-app/category/politics">Politics</NavLink></li>
          <li><NavLink to="news-app/category/ScienceAndTechnology">Tech</NavLink></li>
          <li><NavLink to="news-app/category/uk">UK</NavLink></li>
          <li><NavLink to="news-app/category/world">World</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar