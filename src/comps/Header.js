const Header = (props) => {  //({ title })
    const onClick = () => {
        alert('hello')
    }

    return (
        <div className="header">
            <h1 style={{ color: 'red' }}>{props.title}</h1>
            {/* <button onClick={onClick} className="btn">Add</button> */}
        </div>
    )
}

export default Header
