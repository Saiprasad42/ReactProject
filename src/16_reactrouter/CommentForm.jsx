import React from 'react';

// Presentation Component - Pure UI (View) - Highly portable
export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            text: ""
        }
    }

    onSubmit(event) {
        event.preventDefault(); // To avoid page reload
        this.props.onSave(this.state);
    }

    render() {
        return (
            <form>
                <h1>Add Comment</h1>
                <label>Author:
                    <input type="text" onInput={e => this.setState({ author: e.target.value })}
                        defaultValue={this.state.author} />
                </label>
                <br/><br/>
                <label>
                    Comment Text:
                    <input type="text" onInput={e => this.setState({ text: e.target.value })}
                        defaultValue={this.state.text} />
                </label>
                <br/><br/>
                <input type="submit" value="Save" onClick={(e) => this.onSubmit(e)} />
            </form>
        );
    }
}
