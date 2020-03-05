import React from "react"
import MetsCard from "./MetsCard"
import ContractDetails from "./ContractDetails"
import DetailsWrapper from "./DetailsWrapper";
import Filter from "../Filter"
import Representatives from "./Representatives"
import VeoseTable from './CargoPages/Veoselehed'
import FileRow from './FileRow/index'
import Files from "./ContractDetails/Files"


export default class ClientLanding extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.search(this.props.filter)
    }
    componentDidUpdate(){
        {this.props.searchRequired ? this.props.search(this.props.filter):null}
    }
    onContractRowUpdate(contractId, key, value){
        this.props.updateContractRow(contractId,key,value)
    }

    render() {
        return(
            <div>
                <Filter/>
                {this.props.data.map((data,index) => {
                    return(
                        <MetsCard {...data} key={data._id}>
                            <DetailsWrapper
                                {...data}
                                updateRow={this.onContractRowUpdate.bind(this)}
                                details={
                                    <div>
                                        <ContractDetails updateRow={this.onContractRowUpdate.bind(this)} data={data}/>
                                        <Representatives reps={data.representatives}/>
                                    </div>
                                }
                                files={
                                  <Files documents={data.documents}/>
                                }
                            />
                            {/*<VeoseTable*/}
                                {/*cadastral={data.kinnistu.katastritunnus || null}*/}
                                {/*contractId={data._id}*/}
                                {/*status={data.status}*/}
                            {/*/>*/}
                        </MetsCard>
                    )
                    })
                }
            </div>
        )
    }
}
