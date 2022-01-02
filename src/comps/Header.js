const Header = (props) => {
    return (
        <div className="header">
            <h1 style={{ color: 'red' }}>{props.title}</h1>
            <button 
                onClick={props.onShowForm} 
                style={
                    props.showForm ? {'background': 'red'} : 
                    {'background': 'green'} }
                className="btn">
                    {props.showForm ? 'Close' : 'Open'}
            </button>
        </div>
    )
}

export default Header
