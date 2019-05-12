const colors = require('colors');
const { types } = require('./values');

// export function to list coffee
module.exports = function() {
   
   console.log(colors.bold.yellow("¸.-~*´¨¯¨`*·~-.,-{{COMMAND MENU}}-,.-~*´¨¯¨`*·~-.¸"));

    // list on separate lines
    types.forEach((type) => {
        console.log('%s %s', colors.bold.red(type.command), colors.yellow('/ '+ type.description));
      
    });
};