export default class EditMode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id
        }
    }

    async 

    render() {
        return(
            <div>
                <h1>Are you sure you want to delete this entry</h1>
                <button>YES</button>
                <button>NO</button>
            </div>
        )
    }
}