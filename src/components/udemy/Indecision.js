import { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import IndecisionModal from "./IndecisionModal";

class Indecision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "In Decision App",
      subTitle: "put your life in danger!",
      options: ["alpha", "beta", "gama"],
      isModal: false,
      selectedOption: "",
    };
    this.removeAll = this.removeAll.bind(this);
    this.handelPicked = this.handelPicked.bind(this);
    this.addOptionHandler = this.addOptionHandler.bind(this);
    this.deleteOneOption = this.deleteOneOption.bind(this);
    this.setModal = this.setModal.bind(this);
  }
  removeAll() {
    this.setState(() => {
      return { options: [] };
    });
  }
  handelPicked() {
    if (this.state.options.length) {
      this.setState(() => {
        return { selectedOption: "Options is empty please add!" };
      });
    } else {
      this.setState(() => {
        return {
          selectedOption:
            this.state.options[
              Math.floor(Math.random() * this.state.options.length)
            ],
        };
      });
    }
    // alert(
    //   this.state.options.length
    //     ?
    //     : "Options is empty please add!"
    // );
  }
  setModal(visibilityInput) {
    this.setState((prevState) => {
      return { ...prevState, isModal: visibilityInput };
    });
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

  deleteOneOption(inputOption) {
    this.setState((prevState) => {
      return {
        // ...prevState,
        options: prevState.options.filter((option) => option !== inputOption),
      };
    });
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
        <IndecisionModal
          setModal={this.setModal}
          visibility={this.state.isModal}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
export default Indecision;
