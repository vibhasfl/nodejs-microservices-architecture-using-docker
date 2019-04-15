### Running application
```
> docker-compose build
> docker-compose up
```

Navigate to 

-  http://localhost:8080 to view homepage
-  http://localhost:8080/foo foo to view foo microservice
-  http://localhost:8080/bar bar to view bar microservice


Diagram :
![Microservice](https://github.com/vibhasfl/nodejs-microservices-architecture-using-docker/blob/master/MicroserviceDiagram.png)

Note : 
This is just a sample project which shows how microservices can be implemented for bigger projects.

Here nginx is being used as api gateway just to demontsrate routing for advance features [KONG](https://konghq.com/solutions/gateway/) can be used

### References :

[Nginx based routing gist](https://gist.github.com/soheilhy/8b94347ff8336d971ad0)

[Docker GUI client](https://portainer.readthedocs.io/en/stable/deployment.html)

