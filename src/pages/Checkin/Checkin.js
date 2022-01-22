import React from "react";
import Header from "./header/header"
import Content  from "./content/Content";
import * as comp from "./style"
import Footer from "./footer/Footer"



function Checkin (){
    return(
        <>
       < comp.Container> 
        <Header/>
        <Content/>
        <Footer/>
        </comp.Container>
        </>
    )
}


export default Checkin;