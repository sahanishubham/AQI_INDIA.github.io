var username="AQI WEBSITE";
var password="5cda70e3a0c642309b7aa299bf3e6cde";
var grant_type="password";
var client_id="258c8f0ac5654f86b9e83eaea8d92afc";

var data="username="+username+"&password="+password+"&grant_type="+grant_type+"&client_id="+client_id;

$.ajax({
type:"POST",
dataType:"json",
url:"http://aqi.in/Auth/oauth2/token",
data:data,
success:function(data){
  document.cookie=data['access_token'];
  var x=document.cookie;
  alert(x);

},
error:function()
  {
   alert("Please check Your internet connection !");
  }
});



var tokenvalue=document.cookie;
var MyData="cityId="+0;

alert("MY"+tokenvalue);
alert("cityid"+MyData);

$.ajax({
    url: 'http://aqi.in/AppAPI/api/protected/getSubCities',
    headers: {
        'Authorization':'Bearer '+tokenvalue,
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: MyData,
    success: function(data){
      console.log('succes: '+data);
    }
  });
