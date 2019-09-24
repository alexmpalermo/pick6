import React from 'react'
import { connect } from 'react-redux'
import { updateAdminForm, setAdminFormData } from '../actions/adminForm.js'
import { updateGame } from '../actions/games.js'

class AdminEditGameForm extends React.Component {

  componentDidMount(){
    this.props.game && this.props.setAdminFormData(this.props.game)
  }

  componentDidUpdate(prevProps) {
    this.props.game && !prevProps.game && this.props.setAdminFormData(this.props.game)
  }


  handleChange = (event) => {
    const {name, value} = event.target
    const { updateAdminForm } = this.props
    updateAdminForm(name, value)
  }

  handleSubmit = (event) => {
    const { formData, updateGame, game } = this.props
    event.preventDefault()
    updateGame({
      ...formData,
      gameId: game.id
    })
  }

  render() {
    const { formData} = this.props

    return (
      <>
      <h1 className="page-title">Edit This Game: </h1>
      <form onSubmit={this.handleSubmit}>
        <input placeholder="home" type="text" name="home" value={formData.home} onChange={this.handleChange} className="input"/><br/>
        <input placeholder="away" type="text" name="away" value={formData.away} onChange={this.handleChange} className="input"/><br/>
        <input placeholder="winner" type="text" name="winner" value={formData.winner} onChange={this.handleChange} className="input"/><br/>
        <input placeholder="handicap" type="number" name="handicap" value={formData.handicap} onChange={this.handleChange} className="input"/><br/>
        <input placeholder="total" type="number" min="0" name="total" value={formData.total} onChange={this.handleChange} className="input"/><br/>
        <input placeholder="2019-09-05" type="text" name="day" value={formData.day} onChange={this.handleChange} className="input"/><br/>
        <input placeholder="13:30" type="text" name="time" value={formData.time} onChange={this.handleChange} className="input"/><br/><br/>
        <input type="submit" value="Edit Game" className="input"/>
      </form>
      </>
    )
  }
}

const mapStateToProps = state => {

  return {
    formData: state.adminForm
  }
}

export default connect(mapStateToProps, { updateAdminForm, updateGame, setAdminFormData})(AdminEditGameForm)
