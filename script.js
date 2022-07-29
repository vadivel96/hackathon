
let body=document.querySelector('body');
let div=document.createElement('div');
div.innerHTML=`   <div class="container-fluid div1">
<h3>Based on a song of Ice and fire novel</h3>
<div class="container">
<form class="row g-3"   >
       <p><mark>search for ice and fire universe</mark> </p>
       <div class="col-2">
       <input type="number" min="1" max="9"  class="form-control " id="searchbar"  placeholder="type book number">
       </div>
       <div class="col-auto">
         <button type="button" onclick="iceAndFire()" class="btn btn-primary mb-3 " >Click</button>
       </div>
     </form>
 </div>
</div>
<div class="container-fluid div2" id="division2">

</div>
<div class="container-fluid div3" id="division3">

</div>
`
body.append(div);

async function iceAndFire(){
    
    let searchbarvalue=document.getElementById('searchbar').value;
    console.log(searchbarvalue);
    const getapi=await fetch(`https://www.anapioficeandfire.com/api/books/${searchbarvalue}`);
    let bookdetails=await getapi.json();
    console.log(bookdetails);
    console.log(bookdetails.name);
    console.log(bookdetails.authors[0]);
    console.log(bookdetails.isbn);
    console.log(bookdetails.numberOfPages);
    console.log(bookdetails.characters);

    async function iceAndFire2(){     

        let div2=document.getElementById('division2');
        div2.innerHTML=`<div class="cardplacing "> 
        <div class="card" id="cardinside" style="width: 24rem;">
        <img src="https://m.media-amazon.com/images/I/519Nw0Uw+jL.jpg" class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title">book name:${bookdetails.name}</h5>
          <p class="card-text">author:${bookdetails.authors[0]}</p>
          <p class="card-text">isbn no:${bookdetails.isbn}</p>
          <p class="card-text">no.of.pages:${bookdetails.numberOfPages}</p>
          <p class="card-text" id="chardetails">,</p>
         
        </div>
      </div>
      </div>`
      for(i=0;i<10;i++){
        const getapichar1=await fetch(`${bookdetails.characters[i]}`);
      let chardetails1=await getapichar1.json();
      console.log(chardetails1.name);
      let newpara=document.createElement('p');
      newpara.setAttribute('class','card-text');
      newpara.innerHTML=`character-playedby:(${chardetails1.name},-${chardetails1.playedBy[0]})`
      let cardinside=document.querySelector('#cardinside');
      cardinside.append(newpara);
            
      }
      
     }
    
    
     iceAndFire2()
   
 }
 
