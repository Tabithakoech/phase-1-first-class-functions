function receivesAFunction(cb){
console.log(cb())
}

function returnsANamedFunction(){
    function func(){

    }
    return func;

}

const returnsAnAnonymousFunction = () => {
    return () => {};
}