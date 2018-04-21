import React from 'react';
import '../styles/CardImg.css'
import Paper from 'material-ui/Paper';

const CardImg = ({cardid,name,onClick,img}) => {
    return(
              <div className="box">
              <div className="card" cardid = {cardid} name={name} onClick={() => onClick(cardid)}>
              <img src = {img} />
              </div>
              </div>
    )
}
export default CardImg;


