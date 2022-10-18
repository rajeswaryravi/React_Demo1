import './css/ContentComponent.css';

function ContentComponent(props){
return (
    <div className="content">
       <div className="content_header">
         <h2>{props.about}</h2>
        </div>    
        <div className="right_list">
            <div className="list_header">
            <h3>{props.link}</h3>
            </div>
            <div className="list_header1">
            <h3>{props.link}</h3>
            </div>
        </div>
    </div>
);
}

export default ContentComponent;