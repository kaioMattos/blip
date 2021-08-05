const  compare = ({prop,order}) =>(
    // console.log(prop,order)
    function (a,b) {    
        if(order){
            return b[prop].localeCompare(a[prop]);
        }else{
            return a[prop].localeCompare(b[prop]);
        }    
    }
  )

export {compare}