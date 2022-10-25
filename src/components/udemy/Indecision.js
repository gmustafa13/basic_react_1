import { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

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
