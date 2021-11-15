// import React from 'react'

// const test = () => {
//     let api = 'https://reqres.in/api/products/3'
    

//     let person = [{
//         firstName : "John",
//         lastName  : "Doe",
//         age     : 50,
//         eyeColor  : "blue"
//       },
//       {
//         firstName : "Owais",
//         lastName  : "Javed",
//         age     : 51,
//         eyeColor  : "red"
//       },
//       {
//         firstName : "Awais",
//         lastName  : "Latif",
//         age     : 52,
//         eyeColor  : "Orange"
//       },
//       {
//         firstName : "Tahir",
//         lastName  : "Ali",
//         age     : 53,
//         eyeColor  : "Green"
//       }
//     ]
//     let requiredObject = person.filter(persons => persons.age == 52)
//     console.log(requiredObject)
//     // {person.filter(name => name.includes(52)).map(filterednAME =>(
//     //     <li>
//     //         {filterednAME}
//     //     </li>
//     // ))}     
    
//     return (
// //         <div>
// //             {person.filter(persons => persons.age == 52).map(filteredPerson => (
// //     <li>
// //       {filteredPerson.firstName}
// //     <li>
// //   )}
// //         </div>
// <div></div>
//     )
// }

// export default test







import React from "react";
//import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://reqres.in/api/products/2")
			.then((res) => res.json())
			.then((json) => {console.log(json)
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;



		return (
		<div className = "App">
            
			{/* <h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			} */}
		</div>
	);
}
}

export default App;
