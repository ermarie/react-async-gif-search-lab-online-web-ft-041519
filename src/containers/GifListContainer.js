import React, { Component } from 'react';

class GifListContainer extends Component {

state = {
    images: []
}

  render() {
    return (
      <div>
          <GifList images={this.state.images}/>
          <GifSearch />
      </div>
    )
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data.images.original.url
        })
      })
  }

}

export default GifListContainer
