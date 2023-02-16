import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

const AboutMe = props => {
    const [body, setBody] = useState('')
    const [img, setImg] = useState('')


    const getAbout = () =>{
    
    axios
      // get new message to server
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/AboutMe`)
      .then(response => {
        console.log(response.data.body)
        setBody(response.data.body)
        setImg(response.data.img)
      })
    }

    useEffect(() => {
        getAbout()
    },[])


    return(
        <>
        <img src = {img} style = {{width: '200px', height: '250px' }}/> 
        <p>{body}</p>
        </>
        
        



         
        
    )
}
 
// make this component available to be imported into any other file
export default AboutMe
