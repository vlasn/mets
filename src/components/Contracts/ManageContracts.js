import React from "react"
import MetsCard from "./MetsCard"
import DetailsWrapper from "./DetailsWrapper";
import VeoseTable from './Veoselehed'


export default class ClientLanding extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        //mounted, searching..
        this.props.search(this.props.filter)
    }
    componentDidUpdate(){
        {this.props.searchRequired ? this.props.search(this.props.filter):null}
    }
    onContractRowUpdate(contractId, key, value){
        this.props.contractRowUpdated(contractId,key,value)
    }

    render() {
        console.log('renderist:', this.props.data)
        return(
            <div>
                {this.props.data.map((data,index) => {
                    return(
                        <MetsCard {...data} key={data._id}>
                            <DetailsWrapper {...data} updateRow={this.onContractRowUpdate.bind(this)} />
                            <VeoseTable
                                cadastral={data.kinnistu.katastritunnused}
                                contractId={data._id}
                                status={data.status}
                            />
                        </MetsCard>
                    )
                    })
                }
            </div>
        )
    }
}
