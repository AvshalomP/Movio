import axios from 'axios';


export function apiCall(method, path, data){
    return new Promise( (resolve, reject) => {
        axios[method.toLowerCase()](path, data)
            .then(res => {
                return resolve(res.data);
            })
            .catch(err => {
                return reject(console.log(err));
            })
    });
}