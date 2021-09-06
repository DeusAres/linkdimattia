let oLink = document.querySelector('.oldLink');
let nLink = document.querySelector('.newlink');
let generate = document.querySelector('.generate');
let paste = document.querySelector('.paste')
let oldLink = null
oLink.value = "CACAA"
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
    for (let j = index; j <= index || j < oldLink.lenght; j++){
        if ((oldLink[j].charCodeAt(0) >= 48 && oldLink[j].charCodeAt(0) <= 57) 
            || oldLink[j].charCodeAt(0) >= 65 && oldLink[j].charCodeAt(0) <= 90){
            if (j == index){
                return j;
            }
        }else{
            break;
        }
    }
    return null
};
generate.addEventListener("click",()=>{
    let index = null;
    for (let i = 69; i < oldLink.length || index != 0; i++){
        index = getAsinIndex(oldLink, i)
        if (index != null){
            break;
        }
    }
    let asin = oldLink.substring(index, index+10);
    let ref = "/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=bambv-33&creative=33718&linkCode=as2&creativeASIN=";
    let link = "https://www.amazon.it/dp/";
    let newLinkTemp = link.concat(asin, ref).concat("", asin);
    window.open(newLinkTemp, "").focus()
});
