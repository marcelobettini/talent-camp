import React from 'react'
let renderCount = 0
const Header = () => {
    renderCount++
    return (
        <div className="header">
            <h1>Advanced Hooks and HOC</h1>
            <p>Learning React.memo -High Order Component- useCallback</p>
            <span>Rendered {renderCount} times</span>
        </div>
    )
}

export default React.memo(Header);