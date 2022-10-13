const tuit = (tuit) => `
            <li class="list-group-item">
                <div class="row">
                    <div class="col-9">
                        ${tuit.title}
                    </div>
                    <div class="col-3">
                        <img height="100px" src="../../images/${tuit.image}"/>
                    </div>
                </div>
            </li>
`
export default tuit;