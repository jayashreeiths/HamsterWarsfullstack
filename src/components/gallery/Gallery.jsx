import Hamsters from './Hamsters'
import { useEffect, useState } from 'react'

    

const Gallery = () => {
	const [hamsters, setHamsters] = useState([])
    

	useEffect(() => {
		async function get() {
			const response = await fetch('/api/hamsters', { method: 'GET' })
			const data = await response.json()
			// Använd "mountedRef" här
			setHamsters(data)
			// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är MOUNTED
		}
		get()
	}, [])


	return (
		<div>
			
			
		<div className = "container-list">
			{ hamsters.map(hamster => (

        <Hamsters hamster={hamster} key={hamster.id} />
				
			
				))
              
            }
		</div>
		</div>
	)
}

export default Gallery