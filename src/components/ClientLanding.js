import React from "react"
import MetsCard from "./MetsCard"
import DetailsWrapper from "./DetailsWrapper";

export default class ClientLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>

                {this.props.data.map(data => {
                    return(
                        <MetsCard{...data} caret={true}>
                            <DetailsWrapper documents = {data.documents}/>
                        </MetsCard>
                    )
                    })
                }

            </div>
        )
    }
}