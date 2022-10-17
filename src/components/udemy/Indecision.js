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
  handelPicked = () => {
    console.log("from method");
  };
  render() {
    return (
      <div>
        <button onClick={this.handelPicked}>what should i do ?</button>
      </div>
    );
  }
}
class Options extends Component {
  removeAll() {
    console.log("remove");
  }
  render() {
    const { options } = this.props;
    return (
      <div>
        {/* Option Component here! */}
        <button onClick={this.removeAll}>Remove all</button>
        {options.map((option, i) => (
          <Option key={i} option={option} />
        ))}
      </div>
    );
  }
}
class Option extends Component {
  render() {
    const { option } = this.props;
    return <div>{option}</div>;
  }
}
class AddOption extends Component {
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      console.log("in submit form",option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
class Indecision extends Component {
  render() {
    const title = "In Decision App";
    const subTitle = "put your life in danger!";
    const options = ["alpha", "beta", "gama"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
export default Indecision;
