function Person(props){
	return(
		<div className = "person">
			<h1> { props.name }</h1>
			<p> Your Age: {props.age}</p>
		</div>
	);
}

var app = (
	<div>
		<Person name = "Zakwan" age="25" />
		<Person name = "Shehjad" age = "26" />
 	</div>
);

ReactDOM.render(app, document.querySelector('#app'));