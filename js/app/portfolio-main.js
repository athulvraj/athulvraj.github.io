var myApp=angular.module("myApp",['ngSanitize']); 
myApp.controller("myController",
function myController($scope){
 $scope.heading={
   name:"ATHUL V RAJ",
 title:"FRONT END WEB DEVELOPER",

   email:"athulvraj@gmail.com",

   phone:"+91 8939123432",

   address:"Correspondence address<br>WF3,Ambrosiya Apts<br>Kumaran Nagar	Chennai-60019",
   objectieve:"To obtain a long term career with an organization which has a strong background that provides good opportunity for enhancement of professional and personal skills. To be a continuous winner by being a perfect team player and adding value to the organization in all domains possible.",
  heading.head_objectieve:"CAREER OBJECTIVE" 
  
 }
  
  
});
