const who = [
    {
        image: 'Image',
        username: 'Java',
    },
    {
        image: 'Image',
        username: 'SpaceX',
    },
    {
        image: 'Image',
        username: 'Tesla',
    },
    {
        image: 'Image',
        username: 'Twitter',
    },
]
const rightSidebar = () => `
                <ul class="list-group">
                ${
                    who.map(w => `
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col">${w.image}</div>
                            <div class="col">${w.username}</div>
                            <div class="col"><button class="btn btn-primary rounded-pill float-end">Follow</button></div>
                        </div>
                    </li>
                    `)
                }
                </ul>
`
export default rightSidebar;