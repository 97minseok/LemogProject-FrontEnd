import React , {useState , useEffect} from "react";
import { Component } from "react";
import axios from "axios";
import FollowAccept from "./FollowAccept";

import './MyPage.css';

function MyAlert(props){

    let{myprofile}=props;

    return(
        // <div className="outer_req2">
        //         <p>알림 결과들</p>
        //         <FollowAccept myprofile={myprofile}/>
        // </div>
        <div id="alerthOuter" style={{width:'20%' , marginLeft:'-15px' , height:'1000px' , marginTop:'-16px' , position:'absolute'}}>
            <FollowAccept myprofile={myprofile}/>
        </div>
    )
}

export default MyAlert;