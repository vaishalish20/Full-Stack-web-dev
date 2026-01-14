// function setPermissionLevel(permissionLevel, name1, name2, name3){
//     console.log(`${name1} now has ${permissionLevel} level access`);
//     console.log(`${name2} now has ${permissionLevel} level access`);
//     console.log(`${name3} now has ${permissionLevel} level access`);
    
// }
// setPermissionLevel('admin','Dave','Sally','Mike')

//the above function is not flexible, when we have add more parameters, we have to add one more console log statement and if we want to remove one paramters, then the last name3 will be displayed as undefined.

function setPermissionLevel(permissionLevel, ...names){
// console.log(names);
// the above log statement will give us array of parameters that we passed. we can use forEach Loop to iterate over the array.
names.forEach(name => console.log(`${name} now has ${permissionLevel} level access`) );
//in this way, we can iterate over the rest parameters (names) and can pass as much arguments as we want.
    
}
setPermissionLevel('admin','Dave','Sally','Mike','Clare')