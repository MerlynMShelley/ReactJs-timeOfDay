import React from "react"
import Header from "./Header"
import MyInfo from "./MyInfo"
import Footer from "./footer"

function App(){
	const date = new date()
	const hours = date.gethours()
	let timeOfDay 

	if (hours < 12){
		timeOfDay = "morning"
		}elseif(hours > 12 && hours < 17){
			timeOfDay = "Afternoon"
		}else 
		timeOfDay = "Night"
	}
	return(
		<div>
		<Header />
		<MyInfo />
		<h1>It is currently about {date.gethours() % 12} clock!</h1>
		<h2> Good {timeOfDay} !</h2>
		<input type="checkbox" />
		<p>Placeholder Text</p>

		<input type="checkbox" />
		<p>Placeholder Text</p>

		<input type="checkbox" />
		<p>Placeholder Text</p>

		<input type="checkbox" />
		<p>Placeholder Text</p>

		<input type="checkbox" />
		<p>Placeholder Text</p>

		<input type="checkbox" />
		<p>Placeholder Text</p>
		</Footer>
		</div>
		)
}
export default App