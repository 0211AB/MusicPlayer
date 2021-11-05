const songs = [
    { name: "Cradles", author: "suburban", path: "./songs/0.mp3", cover: "./images/covers/0.jpg", time: "00:00" },
    { name: "XYZ", author: "Unkown", path: "./songs/1.mp3", cover: "./images/covers/1.jpg", time: "00:00" },
    { name: "Abstrakt", author: "U", path: "./songs/2.mp3", cover: "./images/covers/2.jpg", time: "00:00" },
    { name: "Biology", author: "Cartoon x Nublu x GameboyTetris", path: "./songs/3.mp3", cover: "./images/covers/3.jpg", time: "00:00" },
    { name: "Invincible", author: "Deaf Keav", path: "./songs/4.mp3", cover: "./images/covers/4.jpg", time: "00:00" },
    { name: "Invincible Pt.II", author: "Deaf Kev(feat. Sendi Hoxha)", path: "./songs/5.mp3", cover: "./images/covers/5.jpg", time: "00:00" },
    { name: "Safe And Sound", author: "Deaf Kev(feat. Sendi Hoxha)", path: "./songs/6.mp3", cover: "./images/covers/6.jpg", time: "00:00" },
    { name: "Ropes", author: "Dirty Palm(feat. Chandler Jewels)", path: "./songs/7.mp3", cover: "./images/covers/7.jpg", time: "00:00" },
    { name: "For me", author: "Lost Identities x Rob Roth", path: "./songs/8.mp3", cover: "./images/covers/8.jpg", time: "00:00" },
    { name: "SLASH", author: "Tokyo Machine", path: "./songs/9.mp3", cover: "./images/covers/9.jpg", time: "00:00" }
]

let x = document.getElementsByTagName('i')
let title = document.getElementById('name')
let singer = document.getElementById('post')
let cover = document.getElementById('cover')
let player = document.querySelector('#player a')

/*function play(index) {
  
}

let elm = document.querySelector('.skills .songname')

for (let index = 0; index < 10; index++) {
    x[index].addEventListener('click', play(index))
}*/

x.forEach(index => {
    let audio = new Audio(songs[index].path);
    title.innerText = songs[index].name
    singer.innerText = songs[index].author
    cover.setAttribute("src", songs[index].cover)
    player.classList.remove('fa-play')
    player.classList.add('fa-pause')
    audio.play()

});

