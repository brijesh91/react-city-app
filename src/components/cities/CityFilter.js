import React, { useContext, useRef, useEffect } from 'react'
import CityContext from '../../context/city/cityContext'

const CityFilter = () => {
    const cityContext = useContext(CityContext)
    const text = useRef('')

    const { filterCities, clearFilter, filtered } = cityContext

    useEffect(() => {
        if(filtered === null || filtered.length === 0 ) {
            text.current.value = ''
        }
        // eslint-disable-next-line
    }, [])

    const onChange = e => {
        if(text.current.value !== '') {
            filterCities(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
            <form>
                <input ref={text} type="text" placeholder="Filter..." onChange={onChange} className="textInput"/>
            </form>
    )
}

export default CityFilter
