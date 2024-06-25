import React, { useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";


const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const handleCurrencyChange = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };

    return (
        <select className="thead-light" onChange={(e)=>handleCurrencyChange(e.target.value)}>
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
        </select>
    );
};
export default Currency;