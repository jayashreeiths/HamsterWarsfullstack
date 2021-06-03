import './Home.css'
import { Link } from "react-router-dom";
const Home = () => (



  
  
  <div>
  <main className="home-main">
    <div className="home-container">
    <h2>Welcome to HamsterWars!</h2>
    <br/>
    <img
        src={`/assets/hamster-4.jpg`}
        alt="Hamster"
        className="hamster-icon"
      />
     
      <h1>VOTE FOR THE CUTEST HAMSTER.</h1>
      <p>In each battle, you choose the cutest hamster</p>
      <p>In gallery you view your hamsters and you can also add and delete hamsters</p>
      
      <Link to="/Battle">
          <h2 className="Battle">Go to Battle</h2>
        </Link>
        <Link to="/Gallery">
          <h2 className="Gallery">Go to Gallery</h2>
        </Link>
       
        </div>
  </main>
  </div>
    
  
)
  
  export default Home;