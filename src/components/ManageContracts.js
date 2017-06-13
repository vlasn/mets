import React from "react"
import MetsCard from "./MetsCard"
import DetailsWrapper from "./DetailsWrapper";
import VeoseTable from './Veoselehed'



export default class ClientLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tableData = [
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33882',
                kogus: '30',
                summa: '1421',
            },

            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33882',
                kogus: '23',
                summa: '11',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33882',
                kogus: '30',
                summa: '41',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33882',
                kogus: '30',
                summa: '7',
            },
        ];
        return(
            <div>
                {this.props.data.map((data,index) => {
                    return(
                        <MetsCard{...data} key={index}>
                            <DetailsWrapper documents = {data.documents} />
                            <VeoseTable tableData = {this.props.tableData} status={data.status}/>
                        </MetsCard>
                    )
                    })
                }
            </div>
        )
    }
}