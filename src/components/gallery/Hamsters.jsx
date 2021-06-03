import "./Gallery.css";
import { useState } from "react";

const Hamsters = ({ hamster,hamsterList }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [winnerhamsters, setWinnerHamsters] = useState([]);
  const [message, setMessage] = useState("");
  const [hamsterDeleted, setHamsterDeleted] = useState("");
  const[loserinfo,setLoserinfo] =useState([])

  async function deleteHamster(id) {
    await fetch(`/api/hamsters/${id}`, { method: "DELETE" });

    //alert("Hamster deleted succesfully")
    setHamsterDeleted("Hamster  is deleted");
  }

  async function matchWinners(id) {
    const response = await fetch(`/api/matchWinners/${id}`, { method: "GET" });

    const text = await response.text();
    try {
      const data = JSON.parse(text);
      setWinnerHamsters(data);
      console.log(winnerhamsters);
    } catch {
      console.log("Hamster has not won any matches yet..");
      setMessage("Hamster has not won any match yet");
    }
    const tempLoserId = [];

    winnerhamsters.forEach((match) => {
    const loserId = match.loserId;
    tempLoserId.push(loserId);
  });
  console.log("temLoserId", tempLoserId);

 
setLoserinfo(hamsterList.filter((hamster) => tempLoserId.includes(hamster.id)));
  }

  function changeSelect() {
    if (selectedItem) {
      setSelectedItem("");
    } else setSelectedItem(hamster.id);
  }
  const showHamsters = (
    <div>
      <p className={hamster ? "" : "hide"}>{hamsterDeleted}</p>
      <ul className="list" onMouseEnter={() => matchWinners(hamster.id)}>
        <li className="delete" onClick={() => deleteHamster(hamster.id)}>
          ❌
        </li>
        <li>My Age: {hamster.age}</li>
        <li>My Favourite Food: {hamster.favFood}</li>
        <li>I Love : {hamster.loves}</li>
        <li>
          wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}
        </li>
        <li>
          
          Defetaers
          {winnerhamsters.map((hamster) => "\n id:" + hamster.id)}
        </li>
        <li>
          
          Defetaers
          {loserinfo.map((hamster) => "\n name:" + hamster.name)}
        </li>

        <li>{message}</li>
      </ul>
    </div>
  );
  const showImage = (
    <div>
      <div className="name">{hamster.name}</div>
      <img
        src={`/assets/${hamster.imgName}`}
        alt={hamster.name}
        className="hamster-image"
      />
    </div>
  );
  return (
    <div onMouseEnter={changeSelect} onMouseLeave={changeSelect}>
      {selectedItem ? <div className="name">{hamster.name}</div> : showImage}
      <div>{selectedItem ? showHamsters : <span></span>}</div>
    </div>
  );
};
export default Hamsters;
