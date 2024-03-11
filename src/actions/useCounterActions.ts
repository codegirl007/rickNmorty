import { useEffect, useRef, useState } from "react";

type ResultType = {
	count: number;
	randomId: number;
	clearCounter: () => void;
};

const COUNTER_LENGTH = 60;

export const useCounterActions = (allItemsNumber: number, counterStored?: number, idStored?: number): ResultType => {
	const randomNumber = Math.floor(Math.random() * allItemsNumber + 1);
	const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
	const [count, setCount] = useState<number>(COUNTER_LENGTH);
	const [randomId, setRandomId] = useState<number>(() => randomNumber);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			if (count > 0) {
				setCount((prevCount) => prevCount - 1);
			}
		}, 1000);

		return () => {
			clearInterval(intervalRef.current as NodeJS.Timeout);
		};
	}, [count]);

	useEffect(() => {
		if (count === 0) {
			setCount(COUNTER_LENGTH);
			setRandomId(randomNumber);
		}
	}, [count, setCount]);

	useEffect(() => {
		if (counterStored) {
			setCount(counterStored);
		}
		if (idStored) {
			setRandomId(idStored);
		}
	}, []);

	const clearCounter = () => {
		setRandomId(randomNumber);
		setCount(COUNTER_LENGTH);
	};

	return { count, randomId, clearCounter };
};
