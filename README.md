This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
# Development  
### Run api server  
`npm run serve`  

### Config api URL in .env file:  
`.env.development`  
### Run the app  
In the project directory, you can run:  

`npm start`  

Runs the app in the development mode.<br>  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
# Deployment  

`docker build -t [image-tags] .`  
`docker run -d -p [physical-port]:80 [image-tags]`  
