import React from "react";
import {TiDeleleOutLine} from 'react-icons/ti'

export default function DiaryItem({item}) {
  return (
    <div className="diary-row" style={{ color: "black" }}>
       <span>  {item.title}</span>
       <div>
           <span className="date">{item.date}</span>
           <TiDeleleOutLine className="delete" style={{ color: "red"}} />
       </div>
    </div>
  )
}
