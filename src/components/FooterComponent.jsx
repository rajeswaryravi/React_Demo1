import './css/FooterComponent.css';

function FooterComponent(props){
    return (
        <div className="footer">
         <p>{props.copyright}</p>
        </div>
    );
}

export default FooterComponent;