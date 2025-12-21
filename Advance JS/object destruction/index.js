const favouriteFilm = {
    title: "Life",
    actor: "ryan"
}

// const title = favouriteFilm.title
// const actor = favouriteFilm.actor

// example of object distruction
const {title, actor } = favouriteFilm;

console.log(`My favourite film is ${title} and actor is ${actor}`);


// challenge

const dreamHoliday = {
    destination: 'Spain',
    activity: 'Tomatina festival',
    accommodation: 'Luxiary cars',
    companion: 'Junior'
}

const {destination,activity,accommodation,companion} = dreamHoliday

console.log(`My dream destination is ${destination} where i want to attend ${activity} and have a change to ride ${accommodation} and meet ${companion}`);
