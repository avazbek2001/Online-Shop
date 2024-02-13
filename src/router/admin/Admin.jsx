import React from 'react'
import './Admin.css'
import CreateProduct from './createProduct/CreateProduct'
import ManageProduct from './manageProduct/ManageProduct'
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom'

function Admin() {
    const navigate = useNavigate()
    return (
        <div className='admin'>
            <div className="admin__sidebar">
                <button className='go_home_btn' onClick={() => navigate("/")}>Go Home</button >
                <h2>Admin Panel</h2>
                <NavLink to={"create-product"} className="admin__link">Create Product</NavLink>
                <NavLink to={"manage-product"} className="admin__link">Manage Product</NavLink>
            </div>
            <div className="admin__content">
                <Routes>
                    <Route path='/create-product' element={<CreateProduct />} />
                    <Route path='/manage-product' element={<ManageProduct />} />
                </Routes>
            </div>
        </div >
    )
}

export default Admin
