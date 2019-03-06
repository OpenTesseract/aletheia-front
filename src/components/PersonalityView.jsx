import React, { Component } from 'react'
import axios from 'axios'
import { Header, Icon } from 'semantic-ui-react'

class Personality extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const self = this;
        self.getPersonality();
    }

    getPersonality () {
        axios.get(`http://localhost:3000/personality/${this.props.match.params.id}`)
        .then(response => {
            const personality = response.data;
            console.log(personality);
            this.setState({ personality });
        })
        .catch(() => { console.log('Error while fetching Personality'); })
    }

    render() {
        let personality = this.state.personality
        if (personality) {
            return (
                <div>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='user' circular />
                        <Header.Content>{personality.name}</Header.Content>
                        <Header.Subheader>{personality.bio}</Header.Subheader>
                    </Header>
                </div>
            );
        } else {
            return ('loading');
        }
    }

}

export default Personality;