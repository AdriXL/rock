# rock
Rock Paper Scissor Game

The Eclipse project has two parts: the front-end and the back-end.

Front-end: located in 'front' folder. It contains another folder (rock) which can be copied into Tomcat directly. The front-end is not based on webpack, just to keep it simple.

Back-end: everything else but 'front' folder. Maven is used and the war file in project root folder (rest api) can be deployed into Tomcat directly.



DEPLOYMENT INSTRUCTIONS
=======================

- Copy the war file (DemoRest.war) into a local Tomcat using the port 8080
- Copy the front-end folder (/front/rock) into the same local Tomcat (using port 8080) or another Tomcat (using a different port, 8090 for instance)

In future releases, this wont be hardcoded.



ACCESSING THE APP
=================

http://machine_ip:port/rock

let 'machine_ip' be the ip of the machine where the front-end Tomcat is running.
let 'port' be the port used by the Tomcat where the front-end is deployed.
