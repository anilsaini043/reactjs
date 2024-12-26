const JSXCOMP = ({children, color}) => {
    return (
        <div style={{border: `5px solid ${color}`, width: '300px', padding: '10px', margin: '20px'}}>
            {children}
        </div>
    )
}

export default JSXCOMP;