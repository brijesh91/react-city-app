import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import CityContext from '../../context/city/cityContext'

const ShortListItem = ({ city }) => {
    const cityContext = useContext(CityContext)
    const { deleteShortList } = cityContext

    return (
        <div>
            <table className="shortlistTable">
            <tbody>
                <tr>
                    <td>{city.City}</td>
                    <td>{city.District}</td>
                    <td>{city.State}</td>
                    <td>
                        <button onClick={() => deleteShortList(city.City)} className="btn-remove">Remove</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

ShortListItem.propTypes = {
    city: PropTypes.object.isRequired,
}

export default ShortListItem
