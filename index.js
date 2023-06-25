function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction() {
    return function (_fn){

    }
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}