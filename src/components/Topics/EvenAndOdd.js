import React, {Component} from 'react';

export default class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = { 
            evenArray:[],
            oddArray:[],
            userInput:'',
        }


    }
    handleChange(val){
        this.setState({userInput:val});
    }
    assignEvenAndOdds(userInput){
       const arr = userInput.split(',')
       const evens = [];
       const odds = [];

       for(let i=0;i < arr.length;i++){
           if(arr[i] % 2 === 0){
             evens.push(parseInt(arr[i],10));
           } else {
            odds.push (parseInt(arr[i],10));
           }
       }

        this.setState({evenArray: evens, oddArray: odds})

    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className = "inputLine" onChange={(event) => this.handleChange(event.target.value)} />
                <button className = "confirmationButton" onClick={() => this.assignEvenAndOdds(this.state.userInput)}>Split</button>
                <span className = "resultsBox">Even: {JSON.stringify(this.state.evenArray)}</span>
                <span className = "resultsBox">Odd: {JSON.stringify(this.state.oddArray)}</span>
           </div>
        )
    }
}
