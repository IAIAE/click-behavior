export const clickBehavior = config => handler =>{
    let lastcall = 0,
        isLoading = false,
        interval = config.interval,
        cb = config.cb;
    function finish(){
        isLoading = false;
    }
    return function(e){
        if(interval){
            if(new Date - lastcall < interval) return;
            lastcall = new Date;
            handler(e);
        }else if(cb){
            if(!isLoading){
                isLoading = true;
                handler(e, finish);
            }
        }else{
            handler(e)
        }
    }
}