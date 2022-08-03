import React from "react";
import UpcomingEventList from "./UpcomingEventList";
import { useEffect, useState } from "react";
function UpcomingEvent() {
  const [events, setstate] = useState([{}]);
  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(
        "https://applause-c51bd-default-rtdb.firebaseio.com//applause/events.json"
      );

      const responseData = await response.json();
      let event = [];
      for (const key in responseData) {
        event.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
        });
      }
      setstate(event);
    };
    fetchEvent();
  }, [events]);
  const removeHandler=(id)=>{
const updatedEvent= events.filter((event)=>event.id !== id)
fetch("https://applause-c51bd-default-rtdb.firebaseio.com/applause/events.json" , 
{method : 'put', body:JSON.stringify(updatedEvent)})
  }
  const eventList = events.map((event) => (
    <UpcomingEventList
      key={event.id}
      title={event.title}
      description={event.description}
      id={event.id}
      remove = {removeHandler}
    />
  ));
  return <ul>{eventList}</ul>;
}
export default UpcomingEvent;
