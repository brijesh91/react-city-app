import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import CityContext from '../../context/city/cityContext'

const CityItem = ({ city }) => {
    const cityContext = useContext(CityContext)

    console.log('I ran')

    const { deleteCity, shortList, deleteShortList, shortlist, clearFilter } = cityContext
    const { City, District, State } = city

    const onDelete = () => {
        deleteCity(City)
        deleteShortList(City)
        clearFilter()
    }

    return (
        <div>
            <table className="table">
            <tbody>
                <tr>
                    <td>{City}</td>
                    <td>{District}</td>
                    <td>{State}</td>
                    <td>
                        <button onClick={onDelete} className="btn">Delete</button>
                        {shortlist.some(e => e.City === City) 
                        ? <button onClick={() => deleteShortList(City)} className="btn-remove">Remove Shortist</button>
                        : <button onClick={() => shortList(city)} className="btn">Shortlist</button>
                        }
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

CityItem.propTypes = {
    city: PropTypes.object.isRequired,
}

export default CityItem
