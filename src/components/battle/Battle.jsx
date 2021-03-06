import React, { useState, useEffect } from 'react'
import Battledata from './Battledata.jsx'




const Battle = () => {

    const [hamster1, setHamster1] = useState(null)    
    const [hamster2, setHamster2] = useState(null)
	


   /* useEffect(() => {  
       try{
            
        async function fetchData() {
         const response = await fetch('/api/hamsters/random', { method: 'GET' })
			const data = await response.json()
			// Använd "mountedRef" här
			setHamster1(data)
        
        }
        async function fetchData2() {
            const data = await fetch('/api/hamsters/random',{ method: 'GET' })
            const data1 = await data.json()
            
            setHamster2(data1)
        
        }
        fetchData()
        fetchData2()
        
        }
 catch(err){
            console.error(err);
            }, [])*/
			useEffect(()=>{
				fetchData();
			},[])
		

	async function fetchData() {
		const response = await fetch('/api/hamsters/random');
		const data = await response.json()

		const response1 = await fetch('/api/hamsters/random');
		const data1 = await response1.json()

		console.log(data)
		console.log(data1)
	
		setHamster1(data);
		setHamster2(data1);

	   
	   }


     





    let showbattledata = false
    if(hamster1!= null && hamster2 != null){
		showbattledata = true
	}


    return(
		<div>
			
        {showbattledata?
        <div>
			<Battledata hamster1 ={hamster1} hamster2 ={hamster2} fetchData={fetchData}/>
           
            </div>
         :
			<p>"no data"</p>
		}

		</div>
    )

}

export default Battle