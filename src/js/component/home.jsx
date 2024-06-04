import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { renderToStaticMarkup } from "react-dom/server";


const Counter = (props) => {
	return <>
		<div className="container">
			<div className="boxNum">
				<i class="far fa-clock"></i>
			</div>
			<div className="boxNum">{props.digitSix}</div>
			<div className="boxNum">{props.digitFive}</div>
			<div className="break">:</div>
			<div className="boxNum">{props.digitFour}</div>
			<div className="boxNum">{props.digitThree}</div>
			<div className="break">:</div>
			<div className="boxNum">{props.digitTwo}</div>
			<div className="boxNum">{props.digitOne}</div>
		</div>
	</>
}


//create your first component
const Home = (props) => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
			//component mounting
		const interval = setInterval(()=>{
			setCounter(counter => counter + 1);
		}, 1000)
	}, [])

	// useEffect(() => {
	// 	console.log(calculateSeconds(counter, 1));
	// }, [counter])

	return (
		<>
		<Counter
			digitSix = {calculateSeconds(counter,100000)}
			digitFive = {calculateSeconds(counter,10000)}
			digitFour = {calculateSeconds(counter,1000)}
			digitThree = {calculateSeconds(counter,100)}
			digitTwo = {calculateSeconds(counter,10)}
			digitOne = {calculateSeconds(counter,1)}
		/>
		</>
	);
};


function calculateSeconds(aCounter, placeValue){
	return Math.floor(aCounter/placeValue) % 10
}

// return(
// 	<>
// 		<simpleCounter
// 			digitSix = {calculateSeconds(counter,100000)}
// 			digitFive = {calculateSeconds(counter,10000)}
// 			digitFour = {calculateSeconds(counter,1000)}
// 			digitThree = {calculateSeconds(counter,100)}
// 			digitTwo = {calculateSeconds(counter,10)}
// 			digitOne = {calculateSeconds(counter,1)}
// 		/>
// 	</>
// )

export default Home;
