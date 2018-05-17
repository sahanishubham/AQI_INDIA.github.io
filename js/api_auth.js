// var username="AQI WEBSITE";
// var password="5cda70e3a0c642309b7aa299bf3e6cde";
// var grant_type="password";
// var client_id="258c8f0ac5654f86b9e83eaea8d92afc";
//
// var data="username="+username+"&password="+password+"&grant_type="+grant_type+"&client_id="+client_id;
//
// $.ajax({
// type:"POST",
// dataType:"json",
// url:"http://aqi.in/Auth/oauth2/token",
// data:data,
// success:function(data){
//   document.cookie=data['access_token'];
//   var x=document.cookie;
//   alert(x);
// },
//
// error:function()
//   {
//    alert("Please check Your internet connection !");
//   }
// });


var username="AQI WEBSITE";
var password="5cda70e3a0c642309b7aa299bf3e6cde";
var grant_type="password";
var client_id="36df5fba0b0049a4861b34e6bc90db07";

var data="username="+username+"&password="+password+"&grant_type="+grant_type+"&client_id="+client_id;

$.ajax({
type:"POST",
dataType:"json",
url:"http://aqi.in/Auth/oauth2/token",
data:data,
success:function(data){
  document.cookie=data['access_token'];

},
error:function()
  {
   alert("Please check Your internet connection !");
  }
});

//
// var tokenvalue=document.cookie;
// var MyData;
//
// $.ajax({
//     url: 'http://aqi.in/AppAPI/api/protected/getAllLocations',
//     headers: {
//         'Authorization':'Bearer '+tokenvalue,
//         'Content-Type':'application/json',
//         'Accept':'application/json'
//     },
//     method: 'GET',
//     dataType: 'json',
//     data: MyData,
//     success: function(data){
//
//       for(key in data) {
//         if(data.hasOwnProperty(key)) {
//         var value = data[key];
//         console.log(value[0]['cityName']);
//
//         }
//       }
//     }
//   });
