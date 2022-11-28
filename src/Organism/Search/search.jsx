import React from 'react'
import './search.scss'

const Search = () => {
  return (
    <form action='' className='search'>
        <input id='input-text' type={'text'} placeholder="Search..."/>
        <input id='input-submit' type={'submit'} value={'Search'}/>
    </form>
  )
}

export default Search