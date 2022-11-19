
export class ApiConnectionServer{

    //urlServer = "http://localhost:80/api/";
    urlServer = "https://apishopv12.herokuapp.com/api/";

    postData(bodyData,endpoint){
        var requestData = JSON.stringify(bodyData);

        var peticion = fetch(this.urlServer + endpoint,
        {
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body:requestData
        })

        return peticion;
    }


    getData(endpoint){
        var peticion = fetch(this.urlServer + endpoint);
        return peticion;
    }

}