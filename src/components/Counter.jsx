import { useState } from 'react';

export function Counter(props) {
	const [count, setCount] = useState(0)

	const increment = (num) => {
		setCount(count + num);
	}

	const decrement = (num) => {
		setCount(count - num)
	}

	return (
		<div>
      <h3>{ props.label } Counter</h3>
			<span>I have been clicked {count} times!</span>
			<button onClick={() => increment(1)}>Increment</button>
			<button onClick={() => decrement(1)}>Decrement</button>
            <button onClick={() => increment(5)}>+5</button>
            <button onClick={() => decrement(5)}>-5</button>
		</div>
	)
}