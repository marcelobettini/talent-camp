import React from 'react'
import { useParams } from "react-router-dom"
import { getInvoice } from '../data/data'

export default function Invoice() {
    const { invoiceId } = useParams()
    const invoice = getInvoice(Number(invoiceId))

    return (
        <div className='App'>

            <article style={{ padding: "1rem" }}>
                <h5>Invoice # {invoiceId}</h5>
                <p>Due amount: {invoice.amount}</p>
                <p>Due date: {invoice.due}</p>
            </article>


        </div>
    )
}
