/**
 * Created by clstrfvck on 14/06/2017.
 */
import React from "react"
import TextField from "material-ui/TextField"

const styles = {
    underlineStyle: {
        borderColor: '#9bfcd3',
    },

    floatingLabelFocusStyle:{
        color: 'black',
    }
};

const SearchBar = (props) => {
    return(
        <TextField
            className="Filter__searchbar"
            hintText="Otsi e-maili/kinnistunime"
            onChange={(e,v)=>props.onChange(v)}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
    )
}

export default SearchBar