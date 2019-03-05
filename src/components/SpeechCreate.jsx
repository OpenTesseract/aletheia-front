import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Editor, EditorState } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import 'draft-js/dist/Draft.css';

class SpeechCreate extends Component {
    constructor(props) {
        super(props);


        this.state = {
            editorState: EditorState.createEmpty(),
        }

        this.saveSpeech = this.saveSpeech.bind(this);
        this.onChange = (editorState) => this.setState({editorState});
      }

    saveSpeech(e) {
        e.preventDefault();

        const html = stateToHTML(this.state.editorState.getCurrentContent());
        const title = this.state.title;

        axios.post('http://localhost:3000/speech', { title, html })
        .then(response => {
            console.log(response.data)
        })
        .catch(() => { console.log('Erro ao recuperar os dados'); })
    }
  
    render() {
      return (
        <Container>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <h2><center>Create Speech</center></h2>
            </Col>
            <Col md="3"></Col>
          </Row>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Form onSubmit={this.saveSpeech}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value}) }
                        placeholder={'Some Title'}/>
                </FormGroup>
                <FormGroup>
                    <Label>Speech</Label>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                  
                </FormGroup>
                <Button type="submit" value="Submit">Save</Button>
                
              </Form>
            </Col>
            <Col md="3"></Col>
          </Row>
        </Container>
      );
    }
}

export default SpeechCreate;