import tuit from "./tuit.js";

const tuitList = (tuits) => `
<ul class="list-group">
    ${
        tuits.map(t => tuit(t)).join('')
    }
</ul>`


export default tuitList