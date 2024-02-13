import React, { useState, useRef } from 'react'
// controlled and uncontrolled form (component)
// controlled form equal usestate
// uncontrolled form equal useref
import { removeAllCart } from '../../context/cartSlice'
import { useDispatch } from 'react-redux'

const BOT_TOKEN = '6909865165:AAFz3-4bVbj5-Q0yoNhr1Rsga6q0si0dPxg'
const CHAT_ID = -4141809637
const USER_ID = 5819078851
// https://api.telegram.org/bot6909865165:AAFz3-4bVbj5-Q0yoNhr1Rsga6q0si0dPxg/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

function CartForm({ data }) {
    const dispatch = useDispatch()

    const [fullName, setFullName] = useState("")
    const tel = useRef()
    const message = useRef()
    const address = useRef()

    const HandleSubmit = (e) => {
        e.preventDefault()
        let text = "Delivery %0A%0A"
        text += `Name: ${fullName}%0A`
        text += `Phone: ${tel.current.value}%0A`
        text += `Address: ${address.current.value}%0A`
        text += `Message: ${message.current.value}%0A%0A`

        data.forEach((item) => {
            text += `Product Name: ${item.title}%0A`
            text += `Quantity: ${item.quantity}%0A`
            text += `Price: ${item.price?.brm()}%0A%0A`
        });

        text += `Price of all products: ${data?.reduce((a, b) => a + b.price * b.quantity, 0)?.brm()}%0A%0A`

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`

        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()

        api.onreadystatechange = function () {
            if (api.readyState === XMLHttpRequest.DONE && api.status === 200) {
                dispatch(removeAllCart(data))
            }
        }
    }
    return (
        <div className="input__reg">
            <h3>Ma'lumotlarni to'ldiring:</h3>
            <form onSubmit={HandleSubmit} action="">
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="To'liq ismingiz" />
                <input ref={tel} type="text" placeholder="+998 00-000-00-00" />
                <input ref={address} type="text" placeholder="Manzilingiz" />
                <input ref={message} required type="text" placeholder="Habar yo'llash" />
                <div className="total">
                    <p>Umumiy narx:</p>
                    <b> {data?.reduce((a, b) => a + b.price * b.quantity, 0)?.brm()} so'm</b>
                </div>
                <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
            </form>
        </div>
    )
}

export default CartForm
