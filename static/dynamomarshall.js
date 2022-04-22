/* import { marshall, 
    unmarshall
} from "../node_modules/@aws-sdk/client-dynamodb";
 */
import { unmarshall } from './node_modules/@aws-sdk/client-dynamodb';
// var AWS = require('aws-sdk');
// const axios = require('axios');
//import * as AWS from "../@aws-sdk/client-dynamodb";
import axios from './node_modules/axios';
console.log("hola");

//import { unmarshall } from "../node_modules/@aws-sdk/client-dynamodb";

  /*           import { marshall, 
                    unmarshall
                } from "../node_modules/@aws-sdk/client-dynamodb"; */
            //const { marshall, unmarshall } = require("../node_modules/@aws-sdk/client-dynamodb")
            var container = document.getElementById('container')

            //API to get all the items in DynamoDB for daily entries //
            axios.get('https://vdkiwfxfkk.execute-api.us-east-1.amazonaws.com/prod/getitems/de100a80kilosdiario')
                .then (response => {
                    //document.getElementById("container").innerHTML = JSON.stringify(response.data.Items, null, 4);
                    //container.innerHTML = JSON.stringify(response.data)
                    //console.log(response.data[1]);
                    /* for(var k in response.data.Items) {
                        console.log(k, response.data[k]);
                        }    */
                    console.log(response.data+"dd");
                    const to_regular_json = unmarshall(response.data);
                    console.log(to_regular_json);
                    to_regular_json.Items.forEach(post => {
                        //console.log('Date:' + post.entrydate)
                        const dt = document.createElement('p');
                        dt.innerText = JSON.stringify(post.entrydate);
                        // Append to body:
                        document.body.appendChild(dt);

                        const title = document.createElement('p');
                        title.innerText = JSON.stringify(post.title);
                        // Append to body:
                        document.body.appendChild(title);
                        
                    });
 
                })
                .catch(error =>console(error));