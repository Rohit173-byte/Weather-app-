
const click= document.querySelector('.click')
const displayhere=document.querySelector('.para')

const apiKey = 'c6770a095472c8ebf8a37466411948d1';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function app(event){
  event.preventDefault()
    const usercity=document.querySelector('.ucity').value.trim()
   const url = `${baseUrl}?q=${(usercity)}&appid=${apiKey}&units=metric`;
  // console.log(`${url}`);
   

fetch(url)
.then((response)=>{
    
  if(!response.ok){
    alert('response not found')
  }

 return(response.json());
    
})
.then((city)=>{
    let cityname=city.name
    //console.log(cityname);
    
    const temp=city.main.temp
    const cloud=city.weather[0].main
    const visible= city.visibility
    displayhere.innerHTML=`city : ${cityname}<br>temperature : ${temp} celsius<br>weather :${cloud} <br> visibility: ${visible} `
   
  
})
.catch(()=>{
    alert('city not found')
})

}
//app()

click.addEventListener('click',app)