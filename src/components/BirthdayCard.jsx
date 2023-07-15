import React, { useState } from "react";
import data from "../data";
const BirthdayCard = () => {
  const [peopleData, setPeopleData] = useState(data);
  const clearData = () => {
    setPeopleData([]);
  };
  return (
    <div className="birthday-card-project">
      <div className="container">
        <div className="card">
          <h1 className="title">
            <span className="people-count">{peopleData.length}</span> birthdays
            today
          </h1>
          <ul className="people">
            {peopleData.map((person) => {
              const { id, name, age, image } = person;
              return (
                <li key={id} className="person">
                  <div className="person-image">
                    <img src={image} alt={name} />
                  </div>
                  <div className="person-details">
                    <h2 className="person-name">{name}</h2>
                    <p className="person-age">{age} years</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <button className="clear-all" onClick={clearData}>
            clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
