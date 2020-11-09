export const getCityID = (city, stateUS) => {
  fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}%20${stateUS}&count=1`, {
    headers: {
      Accept: "application/json",
      "User-Key": "b5e1eb73b37d45f8ccfa51f068bf1f87"
    }
  })
  .then(response => response.json())
};
