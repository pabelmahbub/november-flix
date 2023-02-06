import React from 'react'

function CollapseSection() {
  return (
    <div style={{width:'70%',marginBottom: '200px',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
       <div className="collapse collapse-plus border border-base-300 bg-base-100">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-accent text-base-100 peer-checked:bg-accent text-base-100">
            Click me to show/hide content
        </div>
        <div className="collapse-content bg-accent text-base-100 peer-checked:bg-accent text-base-100"> 
            <p>hello</p>
        </div>
        </div>
    </div>
  )
}

export default CollapseSection