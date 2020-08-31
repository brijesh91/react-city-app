import React, { Fragment, useContext, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import CityItem from '../cities/CityItem'
import CityContext from '../../context/city/cityContext'

const Cities = () => {
    const cityContext = useContext(CityContext)
    
    const {cities , filtered, getData } = cityContext
    
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    if (cities.length === 0) {
        return <h4>Please add a city</h4>
    }

    return (
       <Fragment>
       <TransitionGroup>
            <div>
                <table className="table">
                <tbody>
                    <tr>
                        <th>City</th>
                        <th>Distict</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                    </tbody>
                </table>
            </div>
                {filtered.length !== 0
                    ? filtered.map(city => (
                        <CSSTransition key={city.City} timeout={500} classNames='item'>
                            <CityItem city={city}/>
                        </CSSTransition>
                        ))
                    : cities.map(city => (
                        <CSSTransition key={city.City} timeout={500} classNames='item'>
                            <CityItem  city={city}/>
                        </CSSTransition>
                        ))
                }
        </TransitionGroup>
       </Fragment>
    )
}

export default Cities
