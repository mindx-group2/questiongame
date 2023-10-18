// import React, {Component} from 'react';

// class TimeRemaining extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       remainingTime: 300,
//     }
//   };

//   componentDidMount() {
//     this.timer = setInterval(this.updateTimeRemaining, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   updateTimeRemaining = () => {
//     this.setState((prevState) => {
//       if (prevState.timeRemaining > 0) {
//         return { timeRemaining: prevState.timeRemaining}
//       }
//       else {
//         clearInterval(this.timer);
//         return { timeRemaining: 0};
//       }
//     })
//   };

//   render() {
//     const { timeRemaining } = this.state
//     const progressBarWidth = (timeRemaining / 300) * 100
//     return (
//       <div> 
        
//       </div>
//     );
//   }
// }

export const TimeRemaining = () => {
  return (
    <></>
  );
}