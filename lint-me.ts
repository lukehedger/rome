interface Person {
	name: string;
	age: number;
	email: string;
}

const unusedVar = "nothing-to-see";

function sendEmail(person: Person, message: string): void {
	console.log(`Sending email to ${person.name} at ${person.email}:`);
	console.log(message);
}

const alice: Person = { name: "Alice", age: 30, email: "alice@example.com" };
const message: string = "Hello, Alice! How are you today?";

sendEmail(alice, message);
