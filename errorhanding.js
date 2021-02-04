function criticalCode(){
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

// Try..Catch
console.log("\n************ Try..Catch ************\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//throwing in Try..catch
console.log("\n************ Throwing in Try..Catch ************\n");

try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log ("Got an error");
    logError(ex);
}

//Try..Catch..Finally
console.log("\n************ Try..Catch..Finally ************\n");

try {
    //criticalCode();
    abd ;
} catch (ex) {
    console.log("Got an error");
    logError(ex.name);
} finally {
    console.log("Code that alway will run");
}

function hello () {
    console.log("\n************ Throwing Exception ************\n")
}