function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location == 'Google') {
            resolve('Google says hi')
        }
        else {
            reject("We can only talk to Google");
        }
    });
} 

function processRequest(response) {
    return new Promise((resolve, reject)=> {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    });
}

// calling functions containing promises using then and catch
makeRequest("Google").then(response => {
    console.log("sync: Response Received");
    return processRequest(response);
}).then(processResponse => {
    console.log("sync: "+processResponse);
}).catch(err => {
    console.log("sync: "+err);
});


console.log(" ");
console.log("async function part");

// calling promise function with async and await which works in the same way as above;
async function doWork() {
    console.log("<In>")
    // Using try to catch errors 
    try {
        const response = await makeRequest("Google");
        console.log("async: Response Received");

        const processResponse = await processRequest(response);
        console.log("async: "+ processResponse);
    }
    catch (err) {
        console.log(err)
    }
}
doWork();
console.log("<Out>");
console.log("<Out>");
console.log(" ");

