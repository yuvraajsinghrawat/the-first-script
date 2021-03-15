let views = document.querySelector('.view-count');
let count = 1;

setInterval(()=>{

    count++;
    views.innerHTML = `${count} views`

},10)  // 1000 milliseconds = 1 second
