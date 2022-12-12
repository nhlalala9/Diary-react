import React from "react";
import {TiDeleleOutLine} from 'react-icons/ti'

export default function DiaryItem({item,showModal,deleteItem}) {
  return (
    <div className="diary-row" style={{ color: "black" }}>
       <span onClick={() => showModal(item)}>  {item.title}</span>
       <div>
           <span className="date">{item.date}</span>
           <TiDeleleOutLine onClick={() => deleteItem(item.id)} className="delete" style={{ color: "red"}} />
       </div>
    </div>
  )
}
