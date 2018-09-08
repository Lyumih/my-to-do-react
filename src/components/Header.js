import React from 'react'
import PropTypes from 'prop-types'

/* Компонент с шапкой сайта */

const Header = ({ nameLabel = "Sitename Header" }) => {
    return <h1>{ nameLabel }</h1>
} 

Header.propTypes = {
    nameLabel: PropTypes.string.isRequired
}

export default Header