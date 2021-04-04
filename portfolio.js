
  const contact=document.getElementById("contact");
  const about=document.getElementById("about");
  const skill=document.getElementById("skill")
  const project=document.getElementById("project");
  const education=document.getElementById("education");
  const tag=document.getElementsByTagName("ul")[0].querySelectorAll("a");


function name_animation(){
  const name_="   VIPIN   BOHRA.";
  let i=0;

  setTimeout(()=>{
    let myanimation=setInterval(()=>{

     
      document.getElementById("name").innerHTML+=name_[i];              
           i++;
    
           if(i>=17) clearInterval(myanimation);
      },150)

  },400)
  

}

window.addEventListener('scroll',()=>{
   
    const scroll=document.documentElement.scrollTop;
  if(scroll>200){

    document.getElementById("icons").style.display="none";
    
  
  } 
   
   
   tag.forEach((a)=>{
 
          a.style.borderLeft="2px solid rgba(255,255,255,0.5)";
          a.style.backgroundColor="rgba(255,255,255,0)";
          a.style.color="rgba(255,255,255,0.5)";  

   })

 

 if(scroll>contact.offsetTop-500)
           {
                  
              tag[4].style.borderLeft="3px solid white";
              tag[4].style.color="white";
              tag[4].style.backgroundColor="rgba(255,255,255,0.2)";

           }
   else if(scroll>project.offsetTop-500){
    tag[3].style.borderLeft="3px solid white";
    tag[3].style.color="white";
    tag[3].style.backgroundColor="rgba(255,255,255,0.2)";

   } 
   else if(scroll>skill.offsetTop-500){
    tag[2].style.borderLeft="3px solid white";
    tag[2].style.color="white";
    tag[2].style.backgroundColor="rgba(255,255,255,0.2)";

   }       

   else if(scroll>education.offsetTop-500){
    tag[1].style.borderLeft="3px solid white";
    tag[1].style.color="white";
    tag[1].style.backgroundColor="rgba(255,255,255,0.2)";

   }

   else {

    tag[0].style.borderLeft="3px solid white";
    tag[0].style.color="white";
    tag[0].style.backgroundColor="rgba(255,255,255,0.2)";
      

   }


})

console.log(document.getElementsByClassName("header")[0].offsetTop)

function translate_page(){
  
  document.getElementById("slider").style.transform="translateY(-500vh)";
  
  name_animation();
  
}


////form submission taks////
var form = document.getElementById("my-form");

    
async function handleSubmit(event) {
    event.preventDefault();
  var status = document.getElementById("my-form-status");
    
  var data = new FormData(event.target);
  console.log(data);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status_anmtn();
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
////form submision task completed./////


function status_anmtn(){

  var status = document.getElementById("my-form-status");
   
  status.innerHTML = "Thanks for your submission!";
  status.style.display="block";
  setTimeout(()=>{
    status.style.display="none";
  },1000)

}