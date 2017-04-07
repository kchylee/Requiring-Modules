var pracMod = function(){
  console.log("Modules are files that export objects.");
  cantShowThis();
}

var cantShowThis = function(){
  console.log("This is secret.");
}

module.exports = {
  whatAreModules: pracMod
}

