import React, { useContext, Fragment } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import CityContext from '../../context/city/cityContext'
import ShortListItem from '../../components/cities/ShortListItem'

const Shortlist = () => {
    const cityContext = useContext(CityContext)

    const { shortlist } = cityContext

    if (shortlist.length === 0) {
        return <h4>Shortlist the cities</h4>
    }

    return (
        <div>
            <h1>Shortlisted Cities</h1>
            <Fragment>
            <TransitionGroup>
                <div>
                    <table className="shortlistTable">
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
                    {
                        shortlist.map(city => {
                            return (
                                <CSSTransition key={city.City} timeout={500} classNames='item'>
                                    <ShortListItem  city={city}/>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </Fragment>
        </div>
    )
}

export default Shortlist
