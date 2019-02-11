{ // imagin that all class has blcok of itselft
    
    /**
     *  this is grobal vairable
     *  we cal access variable name for whole block
     */
    let name = 'kritchat' 

    if(true){
        console.log(name); // we can access variable name
        
        //This is local varaiable, allow to use on this block only
        let local = 'test Local'
    }

    /**
     *  not allow to use variable local here
     */
    //console.log(local)
}

{
    /**
     * Name not allow here because it other block
     */
    //console.log(name)
}

/**
 * Avoid to use var at all because it is global variable even you 
 * decare it in block it can access other block also
 */
 {
     var test = 'this is var.. avoid to use this'
     console.log(test)
 }

 {
     /**
      * variable test aviable here also becases it is var
      */
     console.log(test)
 }