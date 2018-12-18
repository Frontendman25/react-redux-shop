import React from 'react'
import PropTypes from 'prop-types'
import { Input, Menu } from 'semantic-ui-react'

function Filter({ setFilter, filterBy }) {

  return (
    <Menu secondary>
      <Menu.Item name='Все' active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')} />
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={setFilter.bind(this, 'price_high')}
      >Цена (дорогие)</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={setFilter.bind(this, 'price_low')}
      >Цена (дешевые)</Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilter.bind(this, 'author')}
      >Автор</Menu.Item>
    </Menu>
  )
}

Filter.propTypes = {

}

export default Filter