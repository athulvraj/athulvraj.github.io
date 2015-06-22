var myApp=angular.module("myApp",['ngSanitize']); 
myApp.controller("myController",
function myController($scope){
 $scope.heading={
     name:"ATHUL V RAJ",
     title:"FRONT END WEB DEVELOPER",
     email:"athulvraj@gmail.com",
     phone:"+91 8939123432",
     address:"<b>Correspondence address</b><br>WF3,Ambrosiya Apts<br>Kumaran Nagar	Chennai-60019",
     objectieve:"To obtain a long term career with an organization which has a strong background that provides good opportunity for enhancement of professional and personal skills. To be a continuous winner by being a perfect team player and adding value to the organization in all domains possible.",
     head_objectieve:"CAREER OBJECTIVE",
     synopsis:[{"Microsoft certified HTML5 with JavaScript and CSS3 specialist."},
{"Result oriented with a total of around 2 years of professional experience in UI Development "},
{"Currently associated with Tata Consultancy Services, Chennai as System Engineer since July 2013"}, 
{"Following Agile Methodology. "},
{"Experienced in Object oriented JavaScript and MVC."}, 
{"Experienced in development - Requirement Analysis, Design, Development and Regression Testing."},
{"Both functionally & technically competent with a strong focus on quality and can easily scale up and adapt to any new technology."}, 
{"Worked in projects as a single resource."},
{"An effective leader and communicator with strong interpersonal, leadership, analytical and people management skills."}, 
{"Excellent trouble shooting, multitasking and problem solving skills. "},
{"Good Exposure to Configuration and customization. "},
{"Good Exposure to programming. "},
{"Training and development "},
{"Experience of Interacting with the Client & Understanding requirements"}]
 }
  
  
});
