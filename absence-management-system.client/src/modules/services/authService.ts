const getAutheticationToken = async (username : string, password : string): Promise<boolean>  => {
    
    let result = false;
    await fetch("https://localhost:7053/api/auth/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then((response) => {
        if(!response.ok){
            console.log("Did not work");
            result = false;
        }
    
        console.log("It worked");
        console.log(response.body);
        result = true;
    }).catch((err) => {
        console.log(err);
    });

    return result;
}


export { getAutheticationToken };