import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import '../App.css'
import { getInvoices } from "../data/data"

export default function Invoices() {
    const invoices = getInvoices()
    console.log(invoices);
    return (
        <>
            <h1>Invoices</h1>
            <div style={{ display: "flex" }}>

                <nav className='App' style={{ padding: "1rem 0" }}>
                    {invoices.map((invoice) => {

                        return (
                            <>
                                < NavLink style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "tomato" : null
                                    }
                                }}
                                    to={`/invoices/${invoice.number}`}
                                    key={invoice.number}
                                >{invoice.name}</NavLink>
                            </>
                        )
                    })}
                </nav>
                <Outlet />
            </div>
        </>


    )
}
