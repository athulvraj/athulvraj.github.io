var myApp=angular.module("myApp",[ngSanitize]); 
myApp.controller("myController",
function myController($scope){
 $scope.heading={
   name:"ATHUL V RAJ",
 title:"FRONT END WEB DEVELOPER",

   email:"athulvraj@gmail.com",

   phone:"+91 8939123432",

   address:"Correspondence address<br>WF3,Ambrosiya Apts<br>Kumaran Nagar	Chennai-60019"
 }
  
  
});
