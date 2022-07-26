//1.Get all the countries from the Asia continent /region using the Filter function
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var res=result.filter((ele) =>ele.region==="Asia");
    console.log(res);
    }
//2.Get all the countries with a population of less than 2 lakhs using Filter function
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var res=result.filter((ele) =>ele.population<200000);
    console.log(res);
    }
//3.Print the following details name, capital, flag using forEach function
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   var res=result.forEach(element => {console.log(element.name);
    console.log(element.capital);
    console.log(element.flag);
    
   });
  }
//4.Print the total population of countries using reduce function
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   var res=result.map((ele)=>ele.population);
   var syed=res.reduce((ele,acc)=>ele+acc);
   console.log(syed);
    
  }
//5.Print the country which uses US Dollars as currency.
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
      var result=JSON.parse(request.response);
      var res=result.filter((ele)=>{for(var i=0; i<ele.currencies.length; i++)
         {
           if(ele.currencies[i].code==="USD")
        {
          return true;
        }
         }
        });
        
     console.log(res);
        }