import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import Menu from './Menu'
import BookCard from './BookCard'
import Filter from '../containers/Filter'
import { Card } from 'semantic-ui-react'

import '../App.css';

class App extends React.PureComponent {
  componentDidMount(){
    const { setBooks } = this.props
    axios.get('/books.json').then(({data}) => {
      setBooks(data)
    })
  }

  render() {
    const { books, isReady } = this.props
    return (
      <div className="App">
        <Container>
          <Menu />
          <Filter />
          <Card.Group itemsPerRow={4}>
            {!isReady ? 'Загрузка...' : books.map((book, i) => (
                <BookCard key={i} {...book} />
              ))
            }
            <Card/>
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;