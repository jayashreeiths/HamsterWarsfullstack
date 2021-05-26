import './Gallery.css' 
import {  useState } from 'react'
const Hamsters=({hamster})=>{
	const [state, setState] = useState('')

	async function deleteHamster(id) {
		//const response = await fetch('/api/hamsters/:id', { method: 'DELETE' })
		await fetch(`/api/hamsters/${id}`, { method: 'DELETE' })
        .then(() => setState({ status: 'Delete successful' }));
	   //setStatus('Delete successful');
	}

	
	return (

   <div className="Gallery">
   <main>
 <div >

 <div className="list">



 <span role="img" className="delete"aria-label="cross"onClick ={() =>deleteHamster(hamster.id)} >❌</span>


  <img src={`/assets/${hamster.imgName}`} alt={hamster.imgName} className="hamster-image"/>
  <p><span>{hamster.name}</span></p>
					<p>Years: {hamster.age}</p>
					<p>Games: {hamster.games}</p>
					<p>Favfood: {hamster.favFood}</p>
					<p>Loves: {hamster.loves}</p>
					<p>Wins: {hamster.wins}</p>
					<p>Losses: {hamster.defeats}</p>
	</div>
	</div>
	</main>
	</div>

	)
}
export default Hamsters