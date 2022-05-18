fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
  .then((res) => res.json())
  .then((data) => {
      console.table(data)
    let filteredData = data.filter((a) => a.media_type == "image");
    if (filteredData[0].copyright != null && filteredData[0].copyright != "") {
      document.querySelector("p").innerText = filteredData[0].copyright;
    } else {
      document.querySelector("p").innerText = "";
    }
    document.querySelector("span").innerText = filteredData[0].date;
    document.querySelector("h3").innerText = filteredData[0].explanation;
    document.querySelector("h2").innerText = filteredData[0].title;
    document.querySelector("img").src = filteredData[0].url;
    document.querySelector("button").addEventListener("click", nextPic);
    let i = 1;
    function nextPic() {
      if (i < filteredData.length) {
        if (
          filteredData[i].copyright != null &&
          filteredData[i].copyright != ""
        ) {
          document.querySelector("p").innerText = filteredData[i].copyright;
        } else {
          document.querySelector("p").innerText = "";
        }
        document.querySelector("span").innerText = filteredData[i].date;
        document.querySelector("h3").innerText = filteredData[i].explanation;
        document.querySelector("h2").innerText = filteredData[i].title;
        document.querySelector("img").src = filteredData[i].url;
        i++;
      } else {
        i = 0;
      }
    }
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
