import create from "zustand";

export enum TabType {
	CHARACTERS = "characters",
	LOCATIONS = "locations",
}
export enum AscDescType {
	ASC = "asc",
	DESC = "desc",
}

export type FilterStore = {
	livingStatus: string;
	gender: string;
	species: string;
	type: string;
	page: number;
	tabType: TabType;
	charAscDesc: AscDescType | undefined;
	locAscDesc: AscDescType | undefined;
};

export const useStore = create<FilterStore>(() => ({
	livingStatus: "all",
	gender: "all",
	species: "all",
	type: "all",
	page: 1,
	tabType: TabType.CHARACTERS,
	charAscDesc: undefined,
	locAscDesc: undefined,
}));

export const filterStore = {
	setCharacterFilter: (newLivingStatus: string, newGender: string, newSpecies: string): void => {
		useStore.setState({ livingStatus: newLivingStatus, gender: newGender, species: newSpecies, page: 1 });
	},
	setLocationFilter: (newType: string): void => {
		useStore.setState({ type: newType, page: 1 });
	},
	setPage: (newPage: number) => {
		useStore.setState({ page: newPage });
	},
	setCharAscDesc: (newAscDesc: AscDescType | undefined) => {
		useStore.setState({ charAscDesc: newAscDesc });
	},
	setLocAscDesc: (newAscDesc: AscDescType | undefined) => {
		useStore.setState({ locAscDesc: newAscDesc });
	},
	resetPage: () => {
		useStore.setState({ page: 1 });
	},
	setTabType: (newTabtype: TabType) => {
		useStore.setState({ tabType: newTabtype, livingStatus: "all", gender: "all", species: "all", type: "all", page: 1 });
	},
	useStore,
};
