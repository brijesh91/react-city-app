import React from 'react'
import Cities from '../cities/Cities'
import CityForm from '../cities/CityForm'
import CityFilter from '../cities/CityFilter'

const Home = () => {

    return (
        <div>
            <h1>All Cities</h1>
            <div className="row">
                <div className="side">
                    <CityForm />
                </div>
                <div className="main">
                    <div>
                        <CityFilter />
                    </div>
                    <br></br><br></br>
                    <div>
                        <Cities />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
