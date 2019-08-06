var collection = {
        "name":"Names and Links",
		"nal" : [{
				"name": "Gangtok", 
				"link"  : "https://www.holidify.com/images/tooltipImages/GANGTOK.jpg",
				"themes":["Hill Stations","Nature","Heritage"],
                "season":"Autumn",
			},
		{	
				"name" : "Darjeeling",
				"link" :"https://www.holidify.com/images/tooltipImages/DARJEELING.jpg",
                "themes":["Hill Stations","Nature","Trekking","Road Trips","Honeymoon"],
                "season":"Monsoon",

			},
		{
				"name" : "Udaipur",
				"link" : "https://www.holidify.com/images/tooltipImages/UDAIPUR.jpg",
				"themes":["Adventure","Nature","Heritage","Wildlife"],
                "season": "Autumn",
			},
		{
				"name" :"Mcleodganj",
				"link" :"https://www.holidify.com/images/tooltipImages/MCLEODGANJ.jpg",
				"themes":["Adventure","Nature","Water Activities","Beaches","Wildlife"],
                "season":"Winter",
			},
		{
				"name" : "Munnar",
				"link" : "https://www.holidify.com/images/tooltipImages/MUNNAR.jpg",
                "themes":["Adventure","Nature","Trekking","Heritage","Wildlife"],
                "season":"Summer",
			},
		{
				"name" : "Coorg",
				"link" : "https://www.holidify.com/images/tooltipImages/COORG.jpg",
                "themes":["Adventure","Nature","Trekking","Deserts","Wildlife"],
                "season":"Summer",

			}
          ]
};
var myJSON = JSON.stringify(collection);
var txt = '{"name":"John","some":[{"one":"valueone"},{"two":"valuetwo"}], "age":30, "city":"New York"}'
var obj2= JSON.parse(myJSON);
var obj = JSON.parse(txt);
function fun(){

document.getElementsByClassName("head")[0].innerHTML = obj.name + ", " + obj.age +"<br>"+ obj2.nal[0].name+"<br>"+obj2.nal[2].link;


}
window.load = function(){
    var i,it;
    var ib = document.getElementsByClassName("ib");
    var divs = '<div style="width:100%;height:40%;background-image:url(';
    var divc=');background-size:cover;background-repeat:no-repeat;text-align:center;transition-duration:1000ms;opacity:1;" class="ibimg">Ratings</div>';
    var divts= '<div style="color:mediumseagreen;text-align:center;font-size:14px;width:100%;line-height:50px;background-color:rgba(0,0,0,0.1);">';
    var divtc ='</div>';
    it=0;
    for(i=0;i<15;i++)
    {   ib[i].style.display="";
        ib[i].innerHTML=divs+ obj2.nal[it].link+divc;
        var x = ib[i].innerHTML;
        ib[i].innerHTML = x + divts+ obj2.nal[it++].name+divtc;

        if(it==5){it=0;}
//        i2++;
    }
}
window.sort = function(){
    var chkbox = document.getElementsByClassName("themes");
    var i=0;
    var n= chkbox.length;
    var chks= [];
    
    console.log(n);
    while(i<n){
        if(chkbox[i].checked===true){chks.push(chkbox[i].value);}
        i++;
    }
    console.log(chks);
    clear();

}
window.clear = function (){
    var x = document.getElementsByClassName("ib");
    var n = x.length;
    var i=0;
    while(i<n){
        x[i].style.display="none";
        x[i].innerHTML="";
    }
    
}


function print(n){
  var defhtml;
  var i=0;
  var srno = ++i;
  for(i=0;i<n;i++){
    
  defhtml = document.getElementById("demo2").innerHTML;
  
  document.getElementById("demo2").innerHTML =defhtml+"<br><br>"+"<p>Sr.No :"+srno+"</p><p>Name : "+obj2.nal[i].name+'</p><p>Link : <a href="'+obj2.nal[i].link+'">'+obj2.nal[i].link+'</a></p>';
    srno++;
  }
  
  
}