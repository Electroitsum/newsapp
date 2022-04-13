import '../Style/newscard.css'


function Newscard(props){
    
    
    return(
        <span className="news-article">
        <div className="main-card-con">
            <img className="news-image" src={props?.user?.urlToImage} alt="jj"/>
            <h2 className='news-head'>{props.user.title}</h2>
            <h3 className='news-subhead'>{props.user.description}</h3>
            <p className='news-text'>
            {props.user.content} <a href={props.user.url} target="_blank">Full Article</a>
            </p>

        </div>
        </span>
    )
}

export default Newscard;