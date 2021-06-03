import React, { useState, useEffect } from "react";

import './History.css'

const History = ({hamsters}) => {
  const [latestmatches, setLatestMatches] = useState([]);
  


  useEffect(() => {
	async function getMatches() {
		const response = await fetch("/api/matches", { method: "GET" });
		const data = await response.json();
		console.log(data);
		console.log(data.length);
	  
		setLatestMatches(data.slice(Math.max(data.length - 5, 0)));
	  }
    getMatches();
   
  }, []);

  
    console.log("latestmatches",latestmatches);
	const tempWinnerId=[];

	latestmatches.forEach(match => {
		const winnerId = match.winnerId;
		tempWinnerId.push(winnerId);
	})
	console.log("tempWinnerrID",tempWinnerId)


	let winnersInfo=[];

	winnersInfo=hamsters.filter((hamster)=>tempWinnerId.includes(hamster.id))
	
  	
	
	const tempLoserId=[];

	latestmatches.forEach(match => {
		const loserId = match.loserId;
		tempLoserId.push(loserId);
	})
	console.log("temLoserId",tempLoserId)



	let losersInfo=[];

	losersInfo=hamsters.filter((hamster)=>tempLoserId.includes(hamster.id))
  async function deleteMatch(id) {
    await fetch(`/api/matches/${id}`, { method: "DELETE" })
    
    
	alert(" deleted succesfully")
 
  }



 
  return (

      <section>
        <h1 className="latestMatches">LATEST MATCHES</h1>
		<div className="history-wrapper">
   
			<div className="winner item" >
      <h2>WINNER</h2>
        <ul className= "historyUl">


		      {winnersInfo.map((match) => {
            return (
              <li className="hamname" key={match.id}>
               
               {match.name} <br/>
				<img
        src={`/assets/${match.imgName}`}
        alt={match.name}
        className="history-image"
	 
      />
	  
              </li>
            );
          })
		  }
        </ul>
		</div>

<div className="VSclass"><h1>VS</h1></div>


		<div className="loser item">
    <h2>LOSER</h2>
		<ul className="historyUl" >
{losersInfo.map((match) => {
return (
<li key={match.id}>

{match.name} 
<br/>
  <img
        src={`/assets/${match.imgName}`}
        alt={match.name}
        className="history-image"
	
      />
	  
</li>
);
})
}
</ul>
</div>
<div className="item deleteCross">
  <br/>
  <br/>
  <br/>
<ul >


		      {latestmatches.map((match) => {
            return (
              <li key={match.id} className="lidelete">
             
             
               <span onClick={() => deleteMatch(match.id)}>❌</span>
              
	  
              </li>
            );
          })
		  }
        </ul>

      </div>
    </div>
    </section>

  );
};
export default History;