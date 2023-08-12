//document.write('Script Kontrol Log')
//html tarafındaki parentDivi manipüle etmek için js tarfaın açkeitk
//const parentdiv =document.getElementById('parentDiv')
//Çekitğimiz elemanı her zaman consolda görecez
//console.log(parentdiv)

//burda bir div oluşturuyoruz
//const createdChildDiv=document.createElement('div')
//console.log(createdChildDiv)
//oluşturduğumuz dive id veriyoruz
//createdChildDiv.id='newDiv'
//console.log(createdChildDiv)
//oluşturduğumuz dive bir text verdik
//createdChildDiv.innerText='ben küçük divims'

//oluştrudğumuz divi ekranda görmek için htmlde ki elemena atadık
//parentdiv.appendChild(createdChildDiv)
//başka bir ekranda gösterme yönetmi olarak bodyde verebiliriz
//document.body.appendChild(createdChildDiv)

// const newdiv=document.getElementById('newDiv')
// const bigDiv=document.createElement('div')
// //console.log(bigDiv)

// const ptag=document.createElement('p')
// //console.log(ptag)
// const ptag2=document.createElement('p')
// //console.log(ptag2)

// ptag2.innerText='ben diğer p etiktyeiyim'
// //newdiv.appendChild(ptag2)

// bigDiv.innerText='Ben Büyük Divim'
// document.body.appendChild(bigDiv)
// ptag.innerText='Ben Paragrafım'
// bigDiv.appendChild(ptag)

// ptag.style.color='red'
// ptag.style.fontSize='20px'
// ptag2.style.color='blue'

// bigDiv.style.cursor='pointer'

// bigDiv.addEventListener('click',()=>{
// //console.log('mwerhaba')

// ptag.style.color='blue'

// })

//const counter=document.querySelector('#counter')
//console.log(counter)
const incrementCounter = document.querySelector("#increment");
//console.log(incrementCounter)
const decrementCounter = document.querySelector("#decrement");
//console.log(decrementCounter)
const counterDiv = document.getElementById("count");
//console.log(counter)

//incrementCounter.classList.add('incrementButton')
//counter divinin içindeki sayıyı daha sonra değştirmek için count değişkeni olulturup başlangıç değerine 0 veriyrou
//let count=0;
//counterDivnin içerğini count yaparak dinamik hale getridik
//counterDiv.innerText=count

//count değişkenin değerini 1 artıracak

// const incrementFunction=()=>{

//     count+=1
//     counterDiv.innerText=count
// }

// const decrementFunction=()=>{
//     count-=1
//     counterDiv.innerText=count
// }

//farklı parametlere göre çalışabilen bir dinamik fonskiyn olutşrduk
// const changeCounter=(counterType)=>{

//     //gelecek olan type eğer increment a eşitse artırma işlevi yapacak
// if(counterType=='increment'){
//     count+=1
//     counterDiv.innerText=count
// }else if(counterType=='decrement'){
//     //gelen counterType decrement e eşitse azaltma yapacak
//     count-=1
//     counterDiv.innerText=count
// }else{

//     //eğer bunlardan birisi değilse ekranda hiçbiri yazacak
//     document.write('hiçibiri')
// }

// if(count>0){
//     decrementCounter.classList.add('decrementButton')
//     incrementCounter.classList.remove('incrementButton')
// }else if(count<0){
//     incrementCounter.classList.add('incrementButton')

//     decrementCounter.classList.remove('decrementButton')
// }

// }

// incrementCounter.addEventListener('click',function(e){

//    // console.log(e)
// changeCounter(e.target.id)
// })

// decrementCounter.addEventListener('click',(e)=>{
//    // console.log(e.target.id)
//     changeCounter(e.target.id)
// })

// //etkinlikeklenecekelement.addEventListener('Etkinlik Tipi',function(event){})

// incrementCounter.addEventListener('click',(event)=>{
//    // console.log(event.target.innerText)
// })

const numberDiv = document.querySelector("#numbersDiv");
//console.log(numberDiv)

//numbers adında bir dizi oluşturduk
// const numbers=[1,2,3,4,5,6,7,8,9]

// //numbers dizisinin her bir elemanına  map fonksiyonu yardımıyla eriştik

// numbers.map((number)=>{
// //map fonksiyonu numbers dizisini her bir elemanı bize number şeklinde verdi

// //burda number ın gözükeceği p etiketi oluşturduk
// const numberElement=document.createElement('p')
//    // console.log(numberElement)

//    //p etiketinin içine number i ekledik
//    numberElement.innerText=number
//    //console.log(numberElement.innerText)

//    //son olarak bu p etiketlerini ekranda gözkemsi için bir paranet div ('numbersDiv') e ekledik
//    numberDiv.appendChild(numberElement)

// })

const personelsList = [
  {
    personelProfil:
      "https://images.unsplash.com/photo-1691698139354-201a6b38da1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    personelAdi: "Hasan Çelik",
    personelGörevi: "React ve React Native Developer",
  },
  {
    personelProfil:
      "https://plus.unsplash.com/premium_photo-1691787288771-460eb2b7c99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    personelAdi: "Ahmet Kamil Ateş",
    personelGörevi: "React  Developer",
  },
  {
    personelProfil:
      "https://images.unsplash.com/photo-1691629015243-b2581c01bfe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    personelAdi: "Ahmet Nuri Kaynar",
    personelGörevi: "FrontEnd  Developer",
  },
  {
    personelProfil:
      "https://plus.unsplash.com/premium_photo-1681749413532-a4d96a53b7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    personelAdi: "Alperen Küçüktağ",
    personelGörevi: "ReactJS  Developer",
  },
  {
    personelProfil:
      "https://images.unsplash.com/photo-1691698139354-201a6b38da1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
    personelAdi: "Balı Tabur",
    personelGörevi: "ReactFrontEnd  Developer",
  },{
    personelProfil:
    "https://images.unsplash.com/photo-1691698139354-201a6b38da1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
  personelAdi: "Büşra Falakalı",
  personelGörevi: "ReactFrontEnd  Developer",
   }

  
];

const personels = document.querySelector("#personels");
//console.log(personels)
//const personelCard = document.createElement('div');
//console.log(personelCard)

//personelCard.classList.add("card");
// personelCard.innerHTML = `
//     <div class="card-image">
//         <img src="https://images.unsplash.com/photo-1691698139354-201a6b38da1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="">
//     </div>
//     <div class="card-info">
//         <p>Hasan Çelik</p>
//         <p>React ve React Native Developer</p>
//     </div>`;

//  personels.appendChild(personelCard)



const personelEkle=document.createElement('button')

//console.log(personelEkle)

personels.appendChild(personelEkle)

personelEkle.innerText='Ekle'



//console.log(personelsList)
//personelListesi dönülüyor


personelEkle.addEventListener('click',()=>{
    // console.log('selan')
 
    const newPersonel={
     personelProfil:
     "https://images.unsplash.com/photo-1691698139354-201a6b38da1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
   personelAdi: "Cengiz Eken",
   personelGörevi: "ReactFrontEnd  Developer",
    }
 
    personelsList.push(newPersonel)
    //console.log(personelsList)
    personelsList.map((personel) => {
        //console.log(personel)
      
      
        //her bir eleman için personelCard divi oluştururkuyor
        const personelCard = document.createElement("div");
        //console.log(personelCard)
      
        //personelCard divine önceden belrilediğimiz card classını verdik
        personelCard.classList.add("card");
      
      //personelCard divini persnoels divine çocuk olarak atadık
        personels.appendChild(personelCard);
      
        //personelCard a bir tıklama eventi verdik
      personelCard.addEventListener('click',()=>{
          alert(`Personelin Adı: ${personel.personelAdi} 
      Personelin Görevi: ${personel.personelGörevi}
          `)
      })
      
      //personelCard ın içine html olarak önceden beliriedğeimiz yapyı innerHTML yardımıyla verdik
      
        personelCard.innerHTML = `
              
              <div class='card-image'>
      
              <img src='${personel.personelProfil}'>
              
              </div>
              
              <div>
              <p>${personel.personelAdi}</p>
      
              <p>${personel.personelGörevi}</p>
              
              </div>
              `;
      });
 })