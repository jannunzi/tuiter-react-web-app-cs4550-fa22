const navItems = ['Home', 'Explore', 'Notification', 'Messages', 'Bookmarks', 'Lists']
const navigationSideBar = () => `
<div class="list-group">
    ${
    navItems.map(item => (`
            <a href="#" class="list-group-item">${item}</a>
        `)).join('')
}
</div>
<button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
`;
export default navigationSideBar;