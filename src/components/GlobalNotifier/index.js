import React, { Component } from "react"
import { connect } from "react-redux"
import { hideNotifier } from "./ducks"
import "./GlobalNotifier.scss"

const Notifiers = ({notifiers, hideNotifier}) => {
    return (
      <div className="Notifiers-wrapper">
        {notifiers.map(n => <Notifier key={n.id} {...n} callback={hideNotifier} />)}
      </div>
    )
}

class Notifier extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
      setTimeout(()=>this.props.callback(this.props.id), 3000)
    }
    render() {
        return(
            <div className={`Notifier ${this.props.type === "error" ? "error" : ""}`}>
                <div className="Notifier-text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

const stateProps = state => ({
  notifiers: state.notifiers.notifiers
})

export default connect(stateProps, { hideNotifier })(Notifiers)