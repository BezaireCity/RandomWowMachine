document.querySelector('button').addEventListener('click', getWow)

function getWow(){
  const url = 'https://owen-wilson-wow-api.herokuapp.com/wows/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const wowSound= data.audio
        const audio = new Audio(wowSound);
        audio.play();
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}