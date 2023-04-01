import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
	const storageValue = window.localStorage.getItem(key);
    if (storageValue != null) {
		initialValue = JSON.parse(storageValue);
	}

	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}