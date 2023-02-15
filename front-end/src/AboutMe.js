import { Link } from 'react-router-dom'

const AboutMe = props => {
  return (
    <>
      <h1>A Quick Introduction</h1>

      <img src = "https://cdn.discordapp.com/attachments/593187505403199490/1075369534862659634/IMG_0186.jpg" style = {{width: '200px', height: '250px' }}/> 
      <p>Hello there! My name is Mathew Pan and I am originally from China, but I immigrated to the United States when I was 8 years old. I enjoy various activities such 
      as reading, biking, and playing games. I'm studying CS because I like the feeling of spending time building something and seeing it all come together at the end. In this
      class I hope to learn about the process fo app building and gain experience of building one on my own. 
        </p>

    </>
  )
}
 
// make this component available to be imported into any other file
export default AboutMe
