

var suggest = [];

function toGetArray(){

 const url =
 "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

 fetch(url)
 .then((response) => response.json())
 .then((tshirt) => {
    console.log("teees" ,tshirt);


     // console.log(data.categories["0"])

     // var arsg = data.categories;

     // // console.log(arsg);

     // arsg.forEach((element) => {
     //   suggest.push(element.strCategory);
     // });
     // // console.log(data["0"].strCategory)
     // // for(let x of data)
     // console.log('suggest array');
     // console.log(suggest);
   });
}

this.toGetArray;


listing =()=>{
 console.log("Listing fired");
}