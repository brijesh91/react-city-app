import React, { useState, useContext } from 'react';
import CityContext from '../../context/city/cityContext'

const CityForm = () => {

    const cityContext = useContext(CityContext)
    
    const [city, setCity ] = useState({
        City: '',
        District: '',
        State: ''
    })

    const { City, District, State } = city;

    const onChange = e => {
        setCity({ ...city, [e.target.name]: e.target.value})
    }
        
    const onSubmit = e => {
        e.preventDefault()
        city.City = (city.City.charAt(0).toUpperCase() + city.City.slice(1)).trim()
        if(cityContext.cities.some(e => e.City === city.City)){
            alert('City already exixts!')
            setCity({
                City: '',
                District: '',
                State: ''
            })
        } else {
            city.City = (city.City.charAt(0).toUpperCase() + city.City.slice(1)).trim()
            cityContext.addCity(city)
            setCity({
                City: '',
                District: '',
                State: ''
            })
        }
    }

    let districts = []
    let states = []

    if(cityContext.cities !== null) {
        districts = cityContext.cities.map(item => item.District)
                        .filter((value, index, self) => 
                            self.indexOf(value) === index)
        states = cityContext.cities.map(item => item.State)
                        .filter((value, index, self) => 
                            self.indexOf(value) === index)
    } 

    return (
        <div className="form">
        <form onSubmit={onSubmit}>
            <h2>Add City</h2>
            <input
                type='text'
                placeholder='City'
                name='City'
                value={City}
                onChange={onChange}
                className="textInput"
                required
            /> <br></br><br></br>
            <select name='District' onChange={onChange} className="optionInput">
            <option value='' hidden>District</option>
                {
                    districts.map((value, index) => {
                        return (
                            <option key={districts[index]} value={districts[index]} >
                                {districts[index]}
                            </option>
                        )
                    })
                }
            </select><br></br><br></br>
            <select name='State' onChange={onChange} className="optionInput">
            <option value='' hidden>State</option>
                {
                    states.map((value, index) => {
                        return (
                            
                            <option key={states[index]} value={states[index]} >
                                {states[index]}
                            </option>
                        )
                    })
                }
            </select><br></br><br></br>
            <div>
                <input type="submit" value="Add City" className="btn"/>
            </div>
        </form>
        </div>
    )
}

export default CityForm
