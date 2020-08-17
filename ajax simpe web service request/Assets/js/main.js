/*// version fetch
let run = document.getElementById('run');
let author = document.getElementById('author') ;  
let image = document.getElementById('targetImg');

function updateUi(json){
    document.getElementById('target').innerHTML = json.quote;
        image.setAttribute('src', json.photo);
        author.innerHTML = json.author;
}




run.addEventListener('click',async()=>{
    fetch("https://thatsthespir.it/api")
    .then((response)=> response.json())
    .then(json =>  updateUi(json))
})*/

let run = document.getElementById('run');
let author  = document.getElementById('author');
let image = document.getElementById('targetImg');
let target = document.getElementById('target');

function updateUi(obj){
    

}



run.addEventListener("click", async()=>{
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://thatsthespir.it/api', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    let obj = JSON.parse(this.responseText);
                    author.innerHTML = obj.author;
                    target.innerHTML = obj.quote;
                    image.setAttribute('src', obj.photo);
                    console.log(JSON.parse(this.responseText));
        }
                }
    //call send
    xhr.send();
})
         
            
            

        
      
    
    

