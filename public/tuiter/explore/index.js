import navigationSideBar from "./navbar.js";
import rightSidebar from "./right-sidebar.js";
import mainContent from "./main-content.js";

$('#explore-screen').append(`
        <h1 id="title">Explore Screen</h1>
        <ul id="some-list">
            <li>Some Content</li>
        </ul>
        <div class="row mt-2">
            <div class="col-sm-2 col-md-2 col-xl-2 col-xxl-2" id="nav-side-bar">
                ${navigationSideBar()}
            </div>
            <div class="col-sm-10 col-md-7 col-xl-7 col-xxl-6">
                ${mainContent()}
            </div>
            <div class="col-md-3 col-xl-3 col-xxl-4">
                ${rightSidebar()}
            </div>
        </div>
`)