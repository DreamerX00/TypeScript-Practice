function throwError(txt : string) : never{
    throw new Error(txt);
}

//console.log(throwError("I Am an Error"));

function infiniteLoop():never{
    while(true){}
}

//console.log(infiniteLoop());