const button = document.getElementById("button");
const dish = document.getElementById("dish");
const dii = document.getElementById("dii");


button.onclick = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(function(response){
button.textContent = "NEXT!";
dii.textContent="";
dish.textContent = response.data.meals[0].strMeal;
setTimeout(function(){
dii.textContent = response.data.meals[0].strCategory;
},1000);
    })
    .catch(function(error){

        

        
    })
}