import React, { useState, useEffect } from "react";

export default () => {
    const [types, setTypes] = useState([]);
    // const [formValues, setformValues] = useState({
    //     type: null
    // });

    // const UpdaeHousing = function(event){
    //     setformValues({
    //         ...formValues,
    //         [event.target.name]: event.target.value
    //     });
    //     alert(formValues.type);
    //     fetch('http://localhost:3000/housing_expenses', {
    //         method: 'PUT',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "type": null
    //         })
    //     })
    // }

    useEffect(() => {
        fetch("http://localhost:3000/housing_type").then(response => {
            return response.json();
        }).then((types) => {
            setTypes(types);
        });
    }, [])
    return(
        <div className="housing container">
            <form>
                <div className="form-group">
                    <label>Housing Type</label>
                    <select name="housing_type" className="form-control" name="type">
                        {
                            types.map(function(type){
                                return <option value={type.id} key={type.id}>{type.name}</option>
                            })
                        }
                    </select>
                </div>
                <button type="button">Updae Housing information</button>
            </form>
        </div>
    );
}