console.log('hello from javascript')
console.log(jQuery)
const lists = jQuery('.list-group');
console.log(lists)
// lists.remove()

const title = jQuery('h1#title');
// title.remove()
title.html('Welcome to Explore Screen')
title.css({
    color: "red",
    "background-color": "yellow"
})

const someList = $('#some-list');
const newItem = $('<li>Some new line item</li>')
someList.append(newItem)

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

$('#nav-side-bar').append(navigationSideBar())