import React from "react";
export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <img className="phote" src={image} alt="avatar" />
      {isNew && <span className="new">New</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
