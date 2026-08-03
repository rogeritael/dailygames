import React from "react";

export function Container({children}: {children: React.ReactNode}){
    return (
        <div className="w-full max-screen-w-xl mx-auto px-3">
          {children}
        </div>
    )
}