//endpoints
function getEndpoint(data){
    switch (data) {
        case 'properties':
            
            break;
    
        default:
            break;
    }
}



async function createAccount(type, details){
    endpoint = `create_${type}`;

    if(details){
        //push details to the endpoint
    }else{
        console.error(`error creating new ${type}`);
        return;
    }
}

