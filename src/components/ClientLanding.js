import React from "react"
import MetsCard from "./MetsCard"
import DetailsWrapper from "./DetailsWrapper";
import Table from "./Table";
import VeoseTable from './Table'


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

                {this.props.data.map(data => {
                    return(
                        <MetsCard{...data} caret={true}>
                            <DetailsWrapper documents = {data.documents}/>
                            <VeoseTable tableData = {tableData}/>
                        </MetsCard>
                    )
                    })
                }
            </div>
        )
    }
}