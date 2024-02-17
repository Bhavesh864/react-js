import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date } = props;
    return (
        <div>
            <div className="card my-3" >
                <img src={imageUrl ? imageUrl : 'https://i-invdn-com.investing.com/news/LYNXMPEB5F09C_L.jpg'} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text text-muted">By {author ? author : 'Unknown'} on {new Date(date).toUTCString()}</p>
                    <a href={url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;