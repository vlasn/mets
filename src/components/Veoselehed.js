/**
 * Created by clstrfvck on 12/04/2017.
 */
//This is a wrapper for the login view/page.

import React from "react"
import { connect } from 'react-redux'
import { logIn, credentialChange } from '../actions/userActions'
import Table from './Table'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Veoselehed extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        //this.props.navigateToRoot ? this.props.history.push('/') : null
        return (
            <MuiThemeProvider>
                <div className="login__wrapper">
                    <Table {...this.props} />
                </div>
            </MuiThemeProvider>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        numberClicked(number) {
            dispatch({type: "VEOSELEHED_ACTIVE_PAGE", payload: number})
        },
        arrowClicked(current, total, dir) {
            console.log(current,total,dir);
            let currentPage = current
            let totalCount = total //placeholder
            let newPage = dir === 'left' ? currentPage-1 : currentPage +1;
            if(newPage >= 1 && newPage <= totalCount) {
                dispatch({type: "VEOSELEHED_ACTIVE_PAGE", payload: newPage});
            }
        }
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        currentPage: state.ui.veoselehed.currentPage
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Veoselehed);