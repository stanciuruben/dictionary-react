import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        words: [],
        message: ''
    }

    this.addNewWord = this.addNewWord.bind(this);
    this.searchWord = this.searchWord.bind(this);
  }

  addNewWord(newWord) {
    this.setState((state) => ({
      words: [...state.words, newWord]
    }));
  }

  searchWord(word) {
    if(this.state.words.includes(word)) {
      this.setState({message: 'Word Found'});
    } else {
      this.setState({message: 'Word Not Found'});
    }

    setTimeout(() => {
      this.setState({message: ''});
    }, 2000);
  }

  render() {
    return (
      <div>
        <SumbitForm title={"Add Word"} onSubmit={this.addNewWord} />
        <SumbitForm title={"Search Word"} onSubmit={this.searchWord} />
        {this.state.message !== '' && <h1>{this.state.message}</h1>}
        <UnorderedList list={this.state.words} />
      </div>
    );
  }
}

class SumbitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div className="submit-form">
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button onClick={() => this.props.onSubmit(this.state.input)}>{this.props.title}</button>
      </div>
    );
  }
}

function UnorderedList(props) {
  return (
    <ul className="ul">
      {props.list.map((word, index) => <li key={"list-item-" + index}>{word}</li>)}
    </ul>
  );
}

export default App;
