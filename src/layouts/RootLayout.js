import React from "react"
import {NavLink, Outlet} from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Siopa</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="store">Store</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}