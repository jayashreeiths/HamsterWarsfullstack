import './Battle.css' 

const Battledata =({hamster1,hamster2}) =>{


    return(
		<section className="wrapper">
		<section className="random">
			 <div>
			<img src={`/assets/${hamster1.imgName}`} alt={hamster1.imgName} className="random-image"/>
 <p><span>{hamster1.name}</span></p>
					<p>Years: {hamster1.age}</p>
					<p>Games: {hamster1.games}</p>
					<p>Favfood: {hamster1.favFood}</p>
					<p>Loves: {hamster1.loves}</p>
					<p>Wins: {hamster1.wins}</p>
					<p>Losses: {hamster1.defeats}</p>
            </div>
		  <h1>VS</h1>
		<div>
		   <img src={`/assets/${hamster2.imgName}`} alt={hamster2.imgName} className="random-image"/>
 <p><span>{hamster2.name}</span></p>
					<p>Years: {hamster2.age}</p>
					<p>Games: {hamster2.games}</p>
					<p>Favfood: {hamster2.favFood}</p>
					<p>Loves: {hamster2.loves}</p>
					<p>Wins: {hamster2.wins}</p>
					<p>Losses: {hamster2.defeats}</p>
        </div>
		  </section>
		  </section>
          
    )


}

export default Battledata