import tuitList from "./tuit-list.js";
import * as tuits from "./tuits.js";

const mainContent = () => `
<div class="row">
    <div class="col-11 position-relative">
        <input placeholder="Search Tuiter"
               class="form-control rounded-pill ps-5"/>
        <span class="position-absolute wd-nudge-up">O-</span>
    </div>
    <div class="col-1">
        <span class="float-end">&gt;O&lt;</span>
    </div>
</div>
<ul class="nav nav-tabs mt-2">
    <li class="nav-item">
        <a class="nav-link active">For You</a>
    </li>
    <li class="nav-item">
        <a class="nav-link">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link">News</a>
    </li>
</ul>

<div class="position-relative">
    <img src="../../images/starship.jpg" class="w-100"/>
    <h1 class="position-absolute wd-nudge-up text-white">SpaceX Starship</h1>
</div>
<h1>Main content</h1>
${tuitList(tuits)}
`;

export default mainContent