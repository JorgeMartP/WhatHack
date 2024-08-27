// Placeholder to host a component
import React from "react";

const ShelterHours = () => {
  const getHours = () => {
    const today = new Date();
    const day = today.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

    let hours;
    if (day >= 1 && day <= 5) {
      // Monday to Friday
      hours = "10 a.m. to 4 p.m.";
    } else {
      // Saturday and Sunday
      hours = "9 a.m. to 8 p.m.";
    }

    return hours;
  };

  return (
    <div>
      <h2>Shelter Hours for Today</h2>
      <p>We are open from {getHours()} today.</p>
    </div>
  );
};

export default ShelterHours;