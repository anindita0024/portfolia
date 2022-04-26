import React, { useState, useEffect } from 'react'
import axios from 'axios'


import './home.css'
import Singlecard from './Singlecard';


function Home({like,setLike}) {


    const [card, setCard] = useState([])
    const [search, setSearch] = useState("")
    // const [like, setLike] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)    // destructure the data for get requst data from api///
                setCard(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()   // class the fatchdata function //

    }, [search])


    
    return (
        <>

            <input
                placeholder=" search name"
                className="search-input"
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
            <div className ="card">
                {card.map(item =>(
                    <Singlecard item ={item} like={like} setLike ={setLike} key={item.id}/>
                ))}
            </div>
            
        </>


    )
}

export default Home
