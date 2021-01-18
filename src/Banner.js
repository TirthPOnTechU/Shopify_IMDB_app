import "./Banner.css"

function Banner(props){
    return (
        <div className="title-banner">
            <h1 className="web-title">{props.children}</h1>
        </div>
    )
}

export default Banner;
