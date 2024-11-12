function ViewPlace(){
    let tagArray = document.getElementsByid("place");
    for(let i=0; i<tagArray.length;1++){
        let tag=tagArray[i];
        if(tag.style.color!=="blue"){
            tag.style.color="blue"
            tag.style.fontSize="20px"
        }else{
            tag.style.color="black"
            tag.style.fontSize="16px"
        }
    }
}
function ViewFood(){
    let tagArray = document.getElementsByid("food");
    for(let i=0; i<tagArray.length;1++){
        let tag=tagArray[i];
        if(tag.style.color!=="red"){
            tag.style.color="red"
            tag.style.fontSize="20px"
        }else{
            tag.style.color="black"
            tag.style.fontSize="16px"
        }
    }
}