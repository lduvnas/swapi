import React from "react";
import { Link } from "react-router-dom";

export default function PeoplelistItem({ person, id }) {
  return (
    <div>
      <Link to={`/people/${id}`}>{person.name}</Link>
    </div>
  );
}
