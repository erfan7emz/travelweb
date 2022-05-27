const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key":
        "19eadc5c40msh8e6ae31c4d82fc7p15c7d1jsnde8e78b38db6",
    },
  };
  fetch(
    "https://weatherapi-com.p.rapidapi.com/timezone.json?q=CDG",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const list = data.location;
      const time = list.localtime;
      const t = `<h2><i class="fa-solid fa-clock"></i> Paris Local Time: ${time}</h2>`;
      document.querySelector('.local_time').innerHTML += t;
    })
    .catch((err) => console.error(err));