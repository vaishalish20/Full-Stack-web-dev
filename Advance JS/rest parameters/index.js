// function setPermissionLevel(permissionLevel, name1, name2, name3){
//     console.log(`${name1} now has ${permissionLevel} level access`);
//     console.log(`${name2} now has ${permissionLevel} level access`);
//     console.log(`${name3} now has ${permissionLevel} level access`);

// }
// setPermissionLevel('admin','Dave','Sally','Mike')

//the above function is not flexible, when we have add more parameters, we have to add one more console log statement and if we want to remove one paramters, then the last name3 will be displayed as undefined.

//note: the rest paramters should be the last formal paramters
//means function setPermissionLevel(...names,permissionLevel) --not correct

// function setPermissionLevel(permissionLevel, ...names) {
//     // console.log(names);
//     // the above log statement will give us array of parameters that we passed. we can use forEach Loop to iterate over the array.
//     names.forEach(name => console.log(`${name} now has ${permissionLevel} level access`));
//     //in this way, we can iterate over the rest parameters (names) and can pass as much arguments as we want.

// }
// setPermissionLevel('admin', 'Dave', 'Sally', 'Mike', 'Clare')

//Challenge

function getLabelsHtml(text, sender, ...staffNames) {
    const labelsHtml = staffNames.map(staffName =>
        `<div class="label-card">
      <p>Dear ${staffName.name} </p>
      <p>${text}</p>
      <p>Best wishes,</p>
      <p>${sender}</p>
    </div>`
    ).join('')
    return labelsHtml;
    /*
    Challenge:
    1. Add parameters.
    2. Update the HTML template where you
       see **NAME**.
    3. Return HTML template for each label.
    */

    // `<div class="label-card">
    //   <p>Dear **NAME** </p>
    //   <p>${text}</p>
    //   <p>Best wishes,</p>
    //   <p>${sender}</p>
    // </div>`
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text,
    sender,
    { name: 'Sally' },
    { name: 'Mike' },
    { name: 'Rob' },
    { name: 'Harriet' }

)
