import { readable } from 'svelte/store';

export const time = readable(null, function start(set) {
	// implementation goes here

	return function stop() {};
});

const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);