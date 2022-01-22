import React from 'react'
import * as comp from "./style"
import HamburguerAnimation from '../../../animations/components/HamburguerAnimation';
import TruckAnimation from '../../../animations/components/TruckAnimation';
import Vector from "./Vector.svg"

function Content () {
    return(
  <>
  <comp.Container>
    
    <comp.FirstPhrase>
    <h1>Os Melhores piores</h1>
    <h2><span>hamburgues</span> do bairro!!</h2>
    </comp.FirstPhrase>
    <comp.HamburguerContent>
    <HamburguerAnimation className="hamburguer"></HamburguerAnimation> 
    </comp.HamburguerContent>
    <comp.TruckContent>
    <TruckAnimation/>
    <img src={Vector} alt="vetor"/> 
    </comp.TruckContent>
    <comp.SecondPhrase>
      <h1>Entregas tão rápidas </h1>
      <h2>Quanto você <span>piscando!!</span></h2>
    </comp.SecondPhrase>
    
 </comp.Container>
      
    </>
)

}

export default Content;