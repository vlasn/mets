import React from "react"
import MetsCard from "./MetsCard"
import DetailsWrapper from "./DetailsWrapper";
import VeoseTable from './Veoselehed'


export default class ClientLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.data.map((data,index) => {
                    return(
                        <MetsCard{...data} key={index}>
                            <DetailsWrapper documents = {data.documents} />
                            <VeoseTable tableData = {this.props.tableData}/>
                        </MetsCard>

                    )
                    })
                }
            </div>
        )
    }
}