import React from "react";

export default function PeopleDetail({ person }) {
  function renderAttributes(attr, lable) {
    return (
      <p>
        {lable}: {person[attr]}
      </p>
    );
  }
  return (
    <div>
      <h1>{person.name}</h1>
      {renderAttributes("birth_year", "Birth Year")}
      {renderAttributes("eye_color", "Eye color")}
      {renderAttributes("gender", "Gender")}
      {renderAttributes("hair_color", "Hair color")}
      {renderAttributes("mass", "Weight kg")}
      {renderAttributes("height", "Height")}
    </div>
  );
}
