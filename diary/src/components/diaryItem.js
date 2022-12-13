import React from "react";
import {AiFillDelete} from 'react-icons/ai'

export default function DiaryItem({item,showModal,deleteItem}) {
  return (
    <div className="diary-row" style={{ color: "black" }}>
       <span onClick={() => showModal(item)}>  {item.title}</span>
       <div>
           <span className="date">{item.date}</span>
           <AiFillDelete onClick={() => deleteItem(item.id)} className="delete" style={{ color: "red"}} />
       </div>
    </div>
  )
}
