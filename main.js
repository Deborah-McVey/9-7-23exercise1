function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? Yes, it's called outside and is global.
		console.log(innerVar); // Can we access innerVar? Yes, it's called inside and is local.
	}

	innerFunction();
}

outerFunction();

// Given the code snippet. Explain what scopes are in this current context of the code.