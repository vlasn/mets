import React from "react"
import MetsCard from "./MetsCard"
import DetailsWrapper from "./presentational/DetailsWrapper";
import VeoseTable from './Veoselehed'


export default class ClientLanding extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        //mounted, searching..
        this.props.searchTriggered(this.props.filter)
    }
    componentDidUpdate(){
        {this.props.searchRequired ? this.props.searchTriggered(this.props.filter):null}
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
                            <VeoseTable tableData = {tableData} status={data.status}/>
                        </MetsCard>
                    )
                    })
                }
            </div>
        )
    }
}

//Dummy data just to have something displayed in the tables for now
const tableData = [
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33klrnqjykbnqy882',
        kogus: '30',
        summa: '1421',
    },

    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33mkrleny882',
        kogus: '23',
        summa: '11',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 338gmnkflnw82',
        kogus: '30',
        summa: '41',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 338jgireaojy82',
        kogus: '30',
        summa: '7',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 3jgflakhlm3882',
        kogus: '30',
        summa: '1421',
    },

    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33arhja;882',
        kogus: '23',
        summa: '11',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33grarjraj882',
        kogus: '30',
        summa: '41',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33gdsaryuae882',
        kogus: '30',
        summa: '7',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 3gdsHRru3882',
        kogus: '30',
        summa: '1421',
    },

    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 3adsafas82',
        kogus: '23',
        summa: '1',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 338fsafsadsa82',
        kogus: '30',
        summa: '41',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33fhsddjtkaj882',
        kogus: '30',
        summa: '7',
    },
];