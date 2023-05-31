import { useState } from 'react';

export function Counter(props) {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
            <h3>{ props.label } Counter</h3>
			<span>I have been clicked {count} times!</span>
			<button onClick={increment}>Increment</button>
		</div>
	)
}