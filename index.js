let oLink = document.querySelector('.oldLink');
let nLink = document.querySelector('.newlink');
let generate = document.querySelector('.generate');
let copy = document.querySelector('.copy')
let oldLink = null

if (oLink != null){
    oLink.addEventListener("change",()=>{
        oldLink = oLink.value;
    });
}

generate.addEventListener("click",()=>{
    let index = 0;
    
    for (let i = 0; i < oldLink.length; i++){
        if ((oldLink[i] >= '0' && oldLink[i] <= '9') || 
            oldLink[i].charCodeAt(0) >= "65" && oldLink[i].charCodeAt(0) <= "90"){
            index = i;
            break;
        }
    }
    
    let asin = oldLink.substring(index, index+10);
    let ref = "/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=bambv-21&creative=21718&linkCode=as2&creativeASIN=";
    let link = "https://www.amazon.it/dp/";
    let newLinkTemp = link.concat(asin, ref).concat("", asin);
    nLink.innerHTML = newLinkTemp;
});

copy.addEventListener("click",()=>{
    alert("New link ready, thanks for the money");
    nLink.select();
    nLink.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(newLink.value);

});

