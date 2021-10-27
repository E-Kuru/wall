import React from "react"

class Friend extends React.Component {
  render() {
    const { picture, name } = this.props.friend

    return (
      <div className="d-flex align-items-center mb-2">
        {/* <img src={picture} />
        <p className="ps-3 mb-0">{name}</p> */}
      </div>
    )
  }
}

export default Friends