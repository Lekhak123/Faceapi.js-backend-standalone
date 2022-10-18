# Faceapi.js-backend-standalone
 A express server that uses faceapi.js and takes image base64 as input and gives the processed image as base64


***
### USAGE

1) npm i @tensorflow/tfjs-node --ignore-scripts <br>
2) npm i @tensorflow/tfjs-node --build-from-source<br>
3) npm rebuild @tensorflow/tfjs-node --build-addon-from-source<br>

> - This should be done first just incase you run into any tensorflow installation related errors later. <br>


<small>Finally:  </small> <br>
4) npm i <br>
5) npm start
***

### The backend is ready
> to test: 


```js
let post_data= {
  "image_link":img_base64
}
// The paramater should have image_link as a key.

const res=await axios.post("http://localhost:8800/api/image/face",post_data); 

/* const res=await axios.post("/image/face",post_data);  if you added a proxy in your package.json (Example below)
  "proxy": [
    "http://localhost:8800/api"
  ]
*/
 let {image_data} = res.data;  
 
 /* After the image is processed in the backend, the face expressions, emotions, gender, age, face landmarks will be added in the backend itself and that processed image will be returned as base64.
 
 */


```
