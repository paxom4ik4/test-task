ymaps.ready(init);
    function init(){
        let myMap = new ymaps.Map("map", {
            center: [52.093333, 23.698168],
            zoom: 16
    });
}
const body = document.querySelector("body");

const map = document.querySelector("#map");
const mapShow = document.querySelector(".watch-text");

mapShow.addEventListener("mouseover", ()=>{
    map.classList.remove("hide");
})
mapShow.addEventListener("mouseout", ()=>{
    map.classList.add("hide");
})

const hint = document.querySelector(".card-hint");
const hintText = document.querySelector(".hint-text");
hint.addEventListener("mouseover", ()=>{
    hintText.classList.remove("hide");
})
hint.addEventListener("mouseout", ()=>{
    hintText.classList.add("hide");
})

const popUp = ` 
<div class="pop-up-back">
    <div class="pop-up">
    <div class="pop-up-image"></div>
    <div class="pop-up-plant"></div>
        <span class="close-button">x</span>
        <p class="pop-up-header"><span>Получите</span> программу обучения</p>
        <p class="pop-up-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel enim facere laboriosam a eaque id nostrum, porro repellendus adipisci quas dolores alias at architecto iste magni corrupti. Aut, et culpa.</p>
        <form action="#">
            <select class="form-item">
                <option>Повышение квалификации</option>
                <option>Повышение квалификации</option>
            </select>
            <input class="form-item form-name" type="text" placeholder="Ваше имя">
            <input class="form-item form-phone" type="phone" placeholder="Ваш номер телефона">
            <button class="form-item form-button" type="submit">Получить программу</button>
        </form>
    </div>
</div>
`

const popUpAccept = `
    <div class="pop-up-accept-back">
        <div class="pop-up-accept">
            <span class="close-button">x</span>
            <p class="pop-up-accept-text-1">Ваш заказ принят</p>
            <p class="pop-up-accept-text-2">Ожидайте звонка</p>
        </div>
    </div>`

const cardButton = document.querySelector(".card-button");
const appointment = document.querySelector(".appointment-button");

cardButton.addEventListener('click', ()=> {
    let popUpWindow = document.createElement("div");
    popUpWindow.innerHTML = popUp;
    body.append(popUpWindow);

    let formButton = document.querySelector(".form-button");
    formButton.addEventListener('click', (e)=> {
        let formName = document.querySelector(".form-name").value;
        let formPhone = document.querySelector(".form-phone").value;
        e.preventDefault();
        if(formName == '' && formPhone == '') {
            alert("Введите корректные данные");
        }
        else {
            let popUpAcceptWindow = document.createElement("div");
            popUpAcceptWindow.innerHTML = popUpAccept;
            body.removeChild(popUpWindow);
            body.append(popUpAcceptWindow);

            let closeButton = document.querySelector(".close-button");
            closeButton.addEventListener('click', ()=>{
                body.removeChild(popUpAcceptWindow);
            })
        }
    })

    let closeWindowButton = document.querySelector(".close-button");
    closeWindowButton.addEventListener('click', ()=> {
        body.removeChild(popUpWindow);
    })
})

appointment.addEventListener('click', ()=> {
    let popUpWindow = document.createElement("div");
    popUpWindow.innerHTML = popUp;
    body.append(popUpWindow);

    let formButton = document.querySelector(".form-button");
    formButton.addEventListener('click', (e)=> {
        let formName = document.querySelector(".form-name").value;
        let formPhone = document.querySelector(".form-phone").value;
        e.preventDefault();
        if(formName == '' && formPhone == '') {
            alert("Введите корректные данные");
        }
        else {
            let popUpAcceptWindow = document.createElement("div");
            popUpAcceptWindow.innerHTML = popUpAccept;
            body.removeChild(popUpWindow);
            body.append(popUpAcceptWindow);

            let closeButton = document.querySelector(".close-button");
            closeButton.addEventListener('click', ()=>{
                body.removeChild(popUpAcceptWindow);
            })
        }
    })

    let closeWindowButton = document.querySelector(".close-button");
    closeWindowButton.addEventListener('click', ()=> {
        body.removeChild(popUpWindow);
    })
})

const heart1 = document.getElementById("heart-1");
const heart2 = document.getElementById("heart-2");
const womenBack = document.getElementById("women-background");
if(window.innerWidth < 1420) {
    womenBack.style.display = "none";
}

document.addEventListener("mousemove", (e)=> {
    let cursorY = e.pageY;
    let cursorX = e.pageX;
    let userWidth = document.documentElement.clientWidth
    let userHeight = document.documentElement.clientHeight;
    let halfUserWidth = userWidth / 2;
    let halfUserHeight = userHeight / 2;

    if(cursorX > halfUserWidth && cursorY > halfUserHeight) {
        heart1.style.transform=`translate(${userWidth * 0.01}px, ${userHeight * 0.01}px)`;
        heart2.style.transform=`translate(${userWidth * 0.01}px, ${userHeight * 0.01}px)`;
    }
    else if (cursorX > halfUserWidth && cursorY < halfUserHeight) {
        heart1.style.transform=`translate(${userWidth * 0.01}px, ${-(userHeight) * 0.01}px)`;
        heart2.style.transform=`translate(${userWidth * 0.01}px, ${-(userHeight) * 0.01}px)`;
    }
    else if(cursorX < halfUserWidth && cursorY > halfUserHeight){
        heart1.style.transform=`translate(${-(userWidth) * 0.01}px, ${userHeight * 0.01}px)`;
        heart2.style.transform=`translate(${-(userWidth) * 0.01}px, ${userHeight * 0.01}px)`;
    }
    else if(cursorX < halfUserWidth && cursorY < halfUserHeight) {
        heart1.style.transform=`translate(${-(userWidth) * 0.01}px, ${-(userHeight) * 0.01}px)`;
        heart2.style.transform=`translate(${-(userWidth) * 0.01}px, ${-(userHeight) * 0.01}px)`;
    }
})