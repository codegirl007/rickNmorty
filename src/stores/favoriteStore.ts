import create from "zustand";
import { persist } from "zustand/middleware";

export type FavoriteStoreType = {
	favoriteCharactersId: number[];
	favoriteLocationsId: number[];
};

const useStore = create(
	persist<FavoriteStoreType>(
		() => ({
			favoriteCharactersId: [],
			favoriteLocationsId: [],
		}),
		{
			name: "favorite",
			getStorage: () => localStorage,
		}
	)
);

export const favoriteStore = {
	addFavoriteCharacterId: (characterId: number): void => {
		const favoriteIds = useStore.getState().favoriteCharactersId;
		const uniqueId = favoriteIds.find((id) => id === characterId);
		if (!uniqueId || favoriteIds.length === 0) {
			useStore.setState((state) => ({ favoriteCharactersId: [...state.favoriteCharactersId, characterId] }));
		}
	},
	resetFavoriteCharacters: () => useStore.setState({ favoriteCharactersId: [] }),
	addFavoriteLocationId: (locationId: number): void => {
		const favoriteIds = useStore.getState().favoriteLocationsId;
		const uniqueId = favoriteIds.find((id) => id === locationId);
		if (!uniqueId || favoriteIds.length === 0) {
			useStore.setState((state) => ({ favoriteLocationsId: [...state.favoriteLocationsId, locationId] }));
		}
	},
	resetFavoriteLocations: () => useStore.setState({ favoriteLocationsId: [] }),
	useStore,
};
