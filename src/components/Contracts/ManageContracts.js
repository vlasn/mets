import React from "react"
import MetsCard from "./MetsCard"
import ContractDetails from "./ContractDetails"
import DetailsWrapper from "./ContractDetails/DetailsWrapper";
import VeoseTable from './CargoPages/Veoselehed'


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
                {this.props.data.map((data,index) => {
                    return(
                        <MetsCard {...data} key={data._id}>
                            <DetailsWrapper {...data} updateRow={this.onContractRowUpdate.bind(this)}>
                                <ContractDetails data={data}/>
                                Siin on veel esindajate tabel lisaks. Veoselehtede oma ka.
                            </DetailsWrapper>
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
