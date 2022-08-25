import axios from "axios";
import { useEffect, useState } from "react";

export default function EventsOfTheMonth() {
  const [events, setEvents] = useState();

  useEffect(() => {
    const fetchEventsOfTheMonth = () => {
      axios
        .get(`${process.env.REACT_APP_NIGHTCLUB_APP_BASE_URL}/blogposts/1`)
        .then((response) => {
          setEvents(response.data);
        });
    };
    fetchEventsOfTheMonth();
  }, []);

  return <div> {events ? <h1>'title:'{events.title}</h1> : null}</div>;
}
