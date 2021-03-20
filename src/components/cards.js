import React from 'react'

const Card = props => {
    return(
        <div class="card" style={{width: '50%', display: 'inline-block'}}>
            <img class="card-img-top" src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Card