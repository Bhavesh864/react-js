import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const updateNews = async () => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e4685cba54004fb7ab89dbdc9feefc1b&page=${page}&pageSize=10`;
        setLoading(true);
        const data = await fetch(url)
        props.setProgress(50);
        const parsedData = await data.json();
        props.setProgress(80);

        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults)

        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])

    const handlerPrevClick = async () => {
        setPage(page - 1);
        updateNews()
    }

    const handlerNextClick = async () => {
        setPage(page + 1);
        updateNews();
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e4685cba54004fb7ab89dbdc9feefc1b&page=${page + 1}&pageSize=10`;
        setPage(page + 1);
        const data = await fetch(url)
        const parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };


    return (
        <>
            <h2 style={{ textAlign: 'center', textDecoration: 'underline', marginTop: '80px', marginBottom: '20px' }}>NewsHub - Top {props.category.split('')[0].toUpperCase() + props.category.slice(1)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className='row' >
                        {articles.map((el, i) => {
                            return <div className="col-md-4" key={[i]}>
                                <NewsItem title={el.title ? el.title : ''} description={el.description ? el.description.slice(0, 65) : ''} imageUrl={el.urlToImage} url={el.url} author={el.author} date={el.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button type="button" style={{ visibility: page <= 1 ? 'hidden' : '' }} className="btn btn-dark" onClick={handlerPrevClick}>	&larr; Previous</button>
                    <button type="button" style={{ visibility: page >= maxData ? 'hidden' : '' }} className="btn btn-dark" onClick={handlerNextClick}>Next &rarr;</button>
                </div> */}

        </>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News;





