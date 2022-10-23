import { Component } from "react";

class Header extends Component {
  render() {
    const data = this.props;
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.subTitle}</p>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handelPicked}>what should i do ?</button>
      </div>
    );
  }
}
class Options extends Component {
  render() {
    const { options } = this.props;
    return (
      <div>
        {/* Option Component here! */}
        <button onClick={this.props.removeAll}>Remove all</button>
        {options.map((option, i) => (
          <Option 
          key={i}
          option={option}
          deleteOneOption={this.props.deleteOneOption}
          />
        ))}
      </div>
    );
  }
}
class Option extends Component {
  render() {
    const { option } = this.props;
    return (
      <div>
        {option}
        <button onClick={(e)=>{
          this.props.deleteOneOption(option)
        }}>remove</button>
      </div>
    );
  }
}
class AddOption extends Component {
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
class Indecision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "In Decision App",
      subTitle: "put your life in danger!",
      options: ["alpha", "beta", "gama"],
    };
    this.removeAll = this.removeAll.bind(this);
    this.handelPicked = this.handelPicked.bind(this);
    this.addOptionHandler = this.addOptionHandler.bind(this);
    this.deleteOneOption = this.deleteOneOption.bind(this)
  }
  removeAll() {
    this.setState(() => {
      return { options: [] };
    });
  }
  handelPicked() {
    alert(
      this.state.options.length
        ? this.state.options[
            Math.floor(Math.random() * this.state.options.length)
          ]
        : "Options is empty please add!"
    );
  }

  addOptionHandler(option) {
    if (!option) {
      return "Enter valid option!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option alredy exist!";
    }
    this.setState((prevState) => {
      return { ...prevState, options: prevState.options.concat(option) };
    });
  }

  deleteOneOption(inputOption){
    this.setState((prevState)=>{
      return {
        // ...prevState,
        options:prevState.options.filter((option)=> option !== inputOption)
      }
    })
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Action handelPicked={this.handelPicked} />
        <Options 
        options={this.state.options} 
        removeAll={this.removeAll}
        deleteOneOption={this.deleteOneOption}
        />
        <AddOption addOptionHandler={this.addOptionHandler} />
      </div>
    );
  }
}
export default Indecision;
