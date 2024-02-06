import React from 'react'

const Footer = () => {
  return (
    <footer className = "footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className = "container p-12 flex justify-between">
            <span>
            <img src="/images/logonobg.png" alt="Logo" style={{ width: "40px", height: "40px" }} />
            </span>
            <p className="text-slate-600">
                All rights reserved.
            </p>
        </div>


    </footer>
  )
}

export default Footer