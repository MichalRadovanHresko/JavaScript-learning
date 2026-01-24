// method -> obj 
// function -> global (window, global)
// DONT use this approach
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        const that = this;
        this.tags.forEach(function(tag){
            console.log(that.title, tag);
        });
    }
};
// Better way => arrow functions inherits this value
const movie = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach((tag) => console.log(this.title, tag));
    }
};
 
function playVideo (a, b) {
    console.log(this);
}


video.showTags();
playVideo.call({ name: 'Michal'}, 1, 2);
playVideo.apply({ name: 'Michal'}, [1, 2]); // Difference between call and apply 
playVideo.bind({ name: 'Michal'})(); // It returns a new function and set this to point to this object permanently () will call our function like usual