// https://www.scorebat.com/video-api/v1/ {name of video}

let api = "https://www.scorebat.com/video-api/v1/";
//   let videoApi = `${api}video`;
let data;
let arrayOfHighlights = []
let inputValue = document.getElementById("someInput");
let videoDiv = document.getElementById("videosId");
// const mainDiv = document.getElementById("mainDiv");
// inputValue.addEventListener('oninput', showApi)

function getApi() {
  return fetch(api).then((res) => res.json());
}

async function showApi() {
  try {
    videoDiv.innerHTML =
      '<div id=imgDiv><img id="imgId" src="./loading.gif" alt"Loading.."></div>';
    data = await getApi();
    data.slice(0,10).forEach(element => {
      getClick(element);
      });
  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("imgId").src = "";
  }
}

function getClick(param) {
  if (param.title === inputValue.value) {
    videoDiv.innerHTML = `<div id="highlights">${param.embed}/div>`;
    console.log("shimi");
  }
  arrayOfHighlights.push(param.title)
  // console.log(arrayOfHighlights);
}
showApi();

 
