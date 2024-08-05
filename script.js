const url=`https://fakestoreapi.com/products/`;

let collectionproducts;
fetch(url).then((response)=>{
     let products=response.json();
     return products
}).then((data)=>{
     collectionproducts=data
     runderproducts(collectionproducts);
     textbox.disabled=false;
     btn.disabled=false;
}).catch((err)=>{
     console.log("This is error", err)
});
let having;
let eachclicking;
let productstitle;
let productsimg;
let eachproduct;
let runderproducts=(alldata)=>{
     for(let i=0; i<alldata.length; i++){
     eachproduct=document.createElement("div");
     eachproduct.classList.add("eachproduct");
     eachproduct.id=alldata[i];

     productstitle=document.createElement("div");
     productstitle.classList.add("productstitle");
     productstitle.textContent=alldata[i].title;

     productsimg=document.createElement("img");
     productsimg.classList.add("productsimg");
     productsimg.src=alldata[i].image;

     eachproduct.append(productstitle, productsimg);
     document.getElementById("accepting").append(eachproduct)

     eachproduct.addEventListener("click", ()=>{
          productstitle.textContent=alldata[i].title;
          productstitle.style.fontSize=`22px`
          productsimg.src=alldata[i].image;
          productsimg.style.width=`30%`
          funfun()
          });
  };
}

let textbox=document.querySelector(".form-control");
let btn=document.querySelector(".btn");
let filterproducts;
btn.addEventListener("click", ()=>{
     document.querySelector("#accepting").innerHTML="";
     if (having===true){
          eachclicking.innerHTML="";
          having=false;
     }
     let fromtextbox=textbox.value.toLowerCase()
     filterproducts=collectionproducts.filter(isdata=>isdata.title.toLowerCase().includes(fromtextbox))
     runderproducts(filterproducts);
     textbox.value="";
});

let funfun=()=>{
     document.querySelector("#accepting").innerHTML="";
     document.querySelector("#foreachproduct").innerHTML="";
     if (having===true){
          eachclicking.innerHTML="";
          having=false;
     }
     eachclicking=document.createElement("div");
     eachclicking.classList.add("eachclicking");
     eachclicking.append(productstitle, productsimg);
     document.querySelector("#foreachproduct").append(eachclicking);
     having=true;
}
let menutag=document.querySelector(".lineowner");
menutag.addEventListener("click", ()=>{
     menutag.classList.add("hoverformenu")
     if (menutag.classList.contains("isopened")){
        document.querySelector(".secondline").classList.remove("toopacity")
        document.querySelector(".firstline").classList.remove("rotatefirst")
        document.querySelector(".thirdline").classList.remove("rotatethird")
        menutag.classList.remove("isopened");
     } else {
        document.querySelector(".secondline").classList.add("toopacity")
        document.querySelector(".firstline").classList.add("rotatefirst")
        document.querySelector(".thirdline").classList.add("rotatethird")
        menutag.classList.add("isopened");
     }
});