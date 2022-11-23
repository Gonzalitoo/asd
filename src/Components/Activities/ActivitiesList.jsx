import React, { useEffect, useState } from "react";

import { ListCard } from "../Card/ListCard/ListCard";
import { getActivities } from "../../Services/activitiesService/activitiesService";
import Title from "../Title/Title";

import "../CardListStyles.css";

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities().then((response) => {
      setActivities(response);
    });
  }, []);

  return (
    <div className="container">
      <Title title="Actividades" />
      
    </div>
  );
};

export default ActivitiesList;
