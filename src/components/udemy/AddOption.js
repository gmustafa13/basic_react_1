import { Component } from "react";
export default class AddOption extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: undefined,
      };
      this.addOption = this.addOption.bind(this)
    }
    addOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.addOptionHandler(option);
      e.target.elements.option.value = '' // to clean input field
      if(error){
        this.setState(() => {
          return { error };
        });
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.addOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }