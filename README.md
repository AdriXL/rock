# rock
Rock Paper Scissor Game

The Eclipse project has two parts: the front-end and the back-end.

Front-end: located in 'front' folder. It contains another folder (rock) which can be copied into Tomcat directly. The front-end is not based on webpack, just to keep it simple.

Back-end: everything else but 'front' folder. Maven is used and the war file in project root folder (rest api) can be deployed into Tomcat directly.



DEPLOYMENT INSTRUCTIONS
=======================

- Copy the war file (DemoRest.war) into a Tomcat
- Copy the front-end folder (/front/rock) into the same Tomcat or a different one
	- Open the file 'environment.js' and change the IP/PORT for the rest api calls (if apply).



ACCESSING THE APP
=================

http://machine_ip:port/rock

Where:
'machine_ip' is the ip configured in environment.js file for rest api calls.
'port' is the port configured in environment.js file for rest api calls.
