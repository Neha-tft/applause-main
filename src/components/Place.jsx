import React, { useEffect, useState } from "react";
import PlaceList from "./PlaceList";
import social from '../images/social.png'

function Place() {
  const [places, setPlaces] = useState([{ name: "", url: "" }]);
  const [add, setAdd] = useState(false);
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const [toggle, setToggle] = useState(false);
  console.log(places);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://applause-c51bd-default-rtdb.firebaseio.com/applause/places.json"
        );

        const responseData = await response.json();
        let place = [];
        for (const key in responseData) {
          place.push({
            id: key,
            name: responseData[key].name,
            url: responseData[key].url,
          });
        }

        setPlaces(place);
      };
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [toggle]);

  const onClickHandler = () => {
    setAdd(true);
  };

  const submitHandler = () => {
    setAdd(false);

    const newPlace = { name: name, url: url };
    places.push(newPlace);
    fetch(
      "https://applause-c51bd-default-rtdb.firebaseio.com/applause/places.json",
      {
        method: "PUT",
        body: JSON.stringify(places),
      }
    );
    setToggle((prevState) => !prevState);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const urlHandler = (event) => {
    setUrl(event.target.value);
  };
  const deleteHandler = (id) => {
    const filterPlace = places.filter((place) => place.id !== id);
    fetch(
      "https://applause-c51bd-default-rtdb.firebaseio.com/applause/places.json",
      {
        method: "PUT",
        body: JSON.stringify(filterPlace),
      }
    );
    setToggle((prevState) => !prevState);
  };

  const placeList = places.map((place) => (
    <PlaceList
      key={place.id}
      name={place.name}
      url={place.url}
      id={place.id}
      delHandler={deleteHandler}
    />
  ));
  console.log(places);

  return (
    <div>
      <div className="card">
        <h5 className="place">
          <b>Places</b>
        </h5>
        <br></br>
        <ul>{placeList}</ul>
        {add && (
          <card-4>
            <form className="box-2">
            <div className="division"> 
            <label htmlFor=""> Url</label>
            <input onChange={urlHandler} placeholder="enter url..." /> <br />
            <label htmlFor=""> Site</label>
            <input onChange={nameHandler} type="text"  placeholder="enter site..."/> <br />
            <button className="division-button" onClick={submitHandler}><b>Submit</b></button>
            </div>
            </form>
            
            
          </card-4>
        )}
        
        <img src={social} alt="" onClick={onClickHandler} className="social" height='20px' width='20px'/>
      </div>
    </div>
  );
}

export default Place;
