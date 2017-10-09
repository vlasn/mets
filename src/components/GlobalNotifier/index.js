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
        this.state = {
          entered: false
        }
    }
    componentDidMount() {
      setTimeout(()=>this.props.callback(this.props.id), 3000)
      setTimeout(()=>this.setState(p => ({entered: true})), 200)
    }
    render() {
        console.log(this.state)
        const classNames =
          `Notifier ${
            (this.props.type === "error" ? "error" : "") +
            (this.state.entered ? " entered" : "")
          }`
        return(
            <div className={classNames}>
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