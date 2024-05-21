import React, { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { renderToStaticMarkup } from "react-dom/server";


//create your first component
const Home = (props) => {
	return (
		<>
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
	);
};

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,

}
let counter = 0;
setInterval(function(){
const one = Math.floor(counter/10)
const two = Math.floor(counter/100)
const three = Math.floor(counter/1000)
const four = Math.floor(counter/10000)
const five = Math.floor(counter/100000)
const six = Math.floor(counter/1000000)
counter ++;
},1000);
export default Home;

