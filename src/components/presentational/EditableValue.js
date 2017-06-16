/**
 * Created by clstrfvck on 16/06/2017.
 */
import Chip from "./Chip"
import React,{Component} from "react"

export default class EditableValue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editables: false,
            type: 'array'
        }
        this.addEditable = this.addEditable.bind(this)
        this.removeEditable = this.removeEditable.bind(this)
        this.changeEditable = this.changeEditable.bind(this)
        this.returnEditables = this.returnEditables.bind(this)
        this.submitText = this.submitText.bind(this)
    }
    componentDidMount(){
        this.props.editables ?
            this.setState({
                ...this.state,
                editables: this.props.editables.map(v=>({key: uuid(), val:v})) || false
            })
        :this.setState({...this.state, editables: false})
    }
    returnEditables(aNew){
        if(typeof(aNew)==='string'){
            this.props.returnValues(aNew)
        } else {
            let ready = aNew.map(i=>i.val)
            this.props.returnValues(ready)
        }

    }

    addEditable(value = '') {
        let newArr = [...this.state.editables, {val: value, key: uuid()}]
        this.setState({
            ...this.state,
            editables: newArr
        })
        this.returnEditables(newArr)

    }
    removeEditable(rVal) {
        let newArr = this.state.editables.filter(({val})=>val!==rVal)
        this.setState({
            ...this.state,
            editables: newArr
        })
        this.returnEditables(newArr)

    }
    changeEditable(_key, newVal) {
        let newArr = this.state.editables.map((n)=>{
            return {val: n.key===_key ? newVal : n.val, key:n.key}
        })
        this.setState({
            ...this.state,
            editables: newArr
        })
        this.returnEditables(newArr)
    }
    submitText(e){
        if(e.key==='Enter'){
            this.props.stop()
        }
    }

    render(){
        console.log('rendeur: '+ this.state.editables)
        if(this.state.editables){
            return(
                <div>
                    <div className="FileRow__editable-chip">
                        {this.state.editables.map((line, index)=>(
                            <Chip deletable
                                  editable
                                  key={line.key}
                                  name={line.key}
                                  value={line.val}
                                  remove={()=>this.removeEditable(line.val)}
                                  submit={this.changeEditable}
                            />
                        ))}
                        <Chip static name='add' value='Lisa' clicked={this.addEditable}/>
                    </div>
                </div>
            )
        } else {
            return(
                <input type="text" className="FileRow__editable-input-field"
                       onChange={(e)=>this.returnEditables(e.target.value)} onKeyPress={e=>this.submitText(e)}/>
            )
        }
    }
}
const uuid = () => {
    var i, random;
    var uuid = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }

        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return uuid;
}