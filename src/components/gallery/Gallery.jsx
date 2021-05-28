import Hamsters from './Hamsters'
//import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Gallery = ({hamsterList}) => {
	/*const [hamsters, setHamsters] = useState([])
    

	useEffect(() => {
		async function get() {
			const response = await fetch('/api/hamsters', { method: 'GET' })
			const data = await response.json()
			// Använd "mountedRef" här
			setHamsters(data)
			// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är MOUNTED
		}
		get()
	}, [])*/


	return (
		<div className="Gallery" >
			<div className ="galleryButton">
			 <Link to='/Upload'>
			 <p>ADD YOUR HAMSTER</p> 
                </Link>
				</div>
		<div className = "container-list">
			{ hamsterList.map(hamster => (

        <Hamsters hamster={hamster} key={hamster.id}  />
				
			
				))
              
            }
		</div>
		</div>
	)
}

export default Gallery