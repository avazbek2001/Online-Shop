import React, { useState, useRef } from 'react'
// controlled and uncontrolled form (component)
// controlled form equal usestate
// uncontrolled form equal useref

function CartForm({ data }) {
    const [fullName, setFullName] = useState("")
    const tel = useRef()
    const message = useRef()
    const address = useRef()

    const HandleSubmit = (e) => {
        e.preventDefault()
        let user = {
            fullName: fullName,
            tel: tel.current.value,
            address: address.current.value,
            message: message.current.value,
        }
        console.log(user);
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
