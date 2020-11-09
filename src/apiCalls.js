export const getCityID = (city, stateUS) => {
  return fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}%20${stateUS}&count=1`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Key": "b5e1eb73b37d45f8ccfa51f068bf1f87"
    }
  })
  .then(response => response.json())
};

export const getJoints = (cityID) => {
  return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&cuisines=193&sort=rating`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Key": "b5e1eb73b37d45f8ccfa51f068bf1f87"
    }
  })
  .then(response => response.json())
};
