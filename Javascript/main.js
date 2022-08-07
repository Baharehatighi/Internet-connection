// Target elements
const container = document.querySelector(".container");
const wifiIcon = document.querySelector(".wifi-icon");
const title = document.querySelector("h3");
const detail = document.querySelector("p");
const removeCard = document.querySelector(".remove-icon");

window.onload = () => {
    function ajax(){
    let xhr = new XMLHttpRequest();
    // Sending get request to this url
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    // Load our request
    xhr.onload = () =>{
        if(xhr.status == 200 && xhr.status < 300){
            container.classList.remove("offline");
            title.innerText = "You're online now";
            detail.innerText = "Hurray! Internet is connected";
            wifiIcon.innerHTML = "<i class='bx bx-wifi'></i>";
            // Handle x button
            removeCard.addEventListener("click", ()=>{
                container.classList.add("hide");
            })
            // Hide card after 5 seconds automatically
            setTimeout(()=>{
                container.classList.add("hide");
            }, 5000);

        // If our status wasn't equal to condition above
        }else{
            offline();
        }
    }
    // If our XMLhttpRequest have any error
      
    xhr.onerror = () => {
        offline();
    }

    xhr.send();
 }
    // offline function
    function offline(){
        container.classList.remove("hide");
        container.classList.add("offline");
        title.innerText = "You're offline now";
        detail.innerText = "Oops! internet is disconnected";
        wifiIcon.innerHTML = "<i class='bx bx-wifi-off'></i>";
    }
    // After 100 ms ajax function will update
  setInterval(()=> {
       ajax();
    }, 100);
}
