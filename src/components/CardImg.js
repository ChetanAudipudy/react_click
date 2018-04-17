import React from 'react';
import '../styles/CardImg.css'
import Paper from 'material-ui/Paper';

const CardImg = ({name,onClick}) => {
    return(
            <div className="card">
              <Paper elevation={4} name={name} onClick={() => onClick(name)}>{name}</Paper>
            </div>
    )
}
export default CardImg;


