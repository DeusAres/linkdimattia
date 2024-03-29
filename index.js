let oLink = document.querySelector('.oldLink');
let generate = document.querySelector('.generate');
let paste = document.querySelector('.paste');
let moneyAudio = new Audio('ka-ching.mp3');
let oldLink = null

if (oLink != null){
    oLink.addEventListener("change",()=>{
        oldLink = oLink.value;
    });
};
paste.addEventListener("click",()=>{
    navigator.clipboard.readText().then(text=>{
        oldLink = text
        oLink.value = oldLink;
    }).catch(err =>{
        console.log(err)
    });
});

function getAsinIndex(oldLink, index){
    for (let j = index; j < index+10 || j < oldLink.lenght; j++){
        if ((oldLink[j].charCodeAt(0) >= 48 && oldLink[j].charCodeAt(0) <= 57) 
            || oldLink[j].charCodeAt(0) >= 65 && oldLink[j].charCodeAt(0) <= 90){
            if (j == index+9){
                return index;
            }
        }else{
            break;
        }
    }
    return null
};
generate.addEventListener("click",()=>{
    let index = null;
    for (let i = 0; i < oldLink.length || index != 0; i++){
        index = getAsinIndex(oldLink, i)
        if (index != null){
            break;
        }
    }
    let asin = oldLink.substring(index, index+10);
    let link = "https://www.amazon.it/dp/";
    let ref = "/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=bambv03-21&creative=21718&linkCode=as2&creativeASIN=";
    let newLinkTemp = link.concat(asin, ref).concat("", asin);
    moneyAudio.play()
    window.open(newLinkTemp, "").focus()
});




