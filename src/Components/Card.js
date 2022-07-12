import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar src={props.src} />
        </div>
        <div className="bottom">
          <Detail detailInfo={props.num} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
