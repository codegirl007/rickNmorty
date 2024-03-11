import create from "zustand";
import { persist } from "zustand/middleware";

export type CounterStoreType = {
	characterCounter?: number;
	characterId?: number;
	locationCounter?: number;
	locationId?: number;
};

const useStore = create(
	persist<CounterStoreType>(
		() => ({
			characterCounter: undefined,
			characterId: undefined,
			locationCounter: undefined,
			locationId: undefined,
		}),
		{
			name: "counter",
			getStorage: () => localStorage,
		}
	)
);

export const counterStore = {
	setCharacterCounter: (newCharacterCounter: number | undefined, newCharacterId: number | undefined): void => {
		useStore.setState({ characterCounter: newCharacterCounter, characterId: newCharacterId });
	},
	setLocationCounter: (newLocationCounter: number | undefined, newLocationId: number | undefined): void => {
		useStore.setState({ locationCounter: newLocationCounter, locationId: newLocationId });
	},
	useStore,
};
