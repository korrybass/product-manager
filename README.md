### Documentation

#### How to start project
run ```npm install```
then ```npm start```

The project will start at http://localhost:3000/  

You can also run tests by running  
```npm run test```  
These tests only cover the reducer output to make sure its consistient  

#### Notes

* To get a quick start I used the create-react-app as a base for this application architecture.   
* I built this using react as the framework and redux to handle data storage.  
* I added a webpack loader for sass compilation. Most styles are in scss. If they are in css its from a third party library  
* Added an animation for the advanced filter search  
* I used react bootstrap table for the table functionality  
* Localstorage is being saved and retrieved in the index.js using the store subscribe method (as this is a best practice).  
* Fun project!