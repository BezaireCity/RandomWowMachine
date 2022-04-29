document.querySelector('button').addEventListener('click', getWow)

function getWow(){
  const url = 'https://owen-wilson-wow-api.herokuapp.com/wows/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const wowSound= data[0].audio
        console.log(wowSound)
        const audio = new Audio(wowSound);
        audio.play();
        const owenHead=getHead()
        document.querySelector('#owenHead').src=owenHead
        const moviePoster=data[0].poster
        displayPoster(moviePoster)
        lookAtPoster()
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getHead(){
    const choose=Math.random()
    if (choose<0.14){
        return "img/Owen1.jpg"
    } else if (choose<0.28) {
        return "img/Owen2.jpg"
    } else if (choose<0.28) {
        return "img/Owen2.jpg"
    } else if (choose<0.42) {
        return "img/Owen3.jpg"
    } else if (choose<0.57) {
        return "img/Owen4.jpg"
    } else if (choose<0.71) {
        return "img/Owen5.jpg"
    } else if (choose<0.86) {
        return "img/Owen6.jpg"
    } else {
        return "img/Owen7.jpg"
    }
}

function displayPoster(movie) {
    let posterToShow=document.querySelector('.hidden')
    let posterToHide=document.querySelector('.moviePoster:not(.hidden)')
    posterToShow.src=movie
    posterToShow.classList.remove('hidden')
    posterToShow.classList.remove('smallImg')
    posterToHide.classList.add('hidden')
}

function lookAtPoster(){
    let head=document.querySelector('#owenHead').classList
    head.remove('smallImg')
    console.log(head)
    if (head==''){
        head.add('lookLeft')
    } else {
        head.remove('lookLeft')
    }
}