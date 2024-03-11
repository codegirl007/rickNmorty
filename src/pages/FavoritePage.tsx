import { Tab } from "@mui/material";
import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { TabType } from "../stores/filterStore";
import { CharacterFavorites } from "../components/favorites/CharacterFavorites";
import { LocationFavorites } from "../components/favorites/LocationFavorites";
import { PageContainer } from "../components/layout/PageContainer";

export const FavoritePage = (): JSX.Element => {
	const [selectedTab, setSelectedTab] = useState<TabType>(TabType.CHARACTERS);

	return (
		<PageContainer>
			<TabContext value={selectedTab}>
				<TabList
					onChange={(_event, newTab) => {
						setSelectedTab(newTab);
					}}
				>
					<Tab label="Characters" value={TabType.CHARACTERS} />
					<Tab label="Locations" value={TabType.LOCATIONS} />
				</TabList>
				<TabPanel value={TabType.CHARACTERS}>
					<CharacterFavorites />
				</TabPanel>
				<TabPanel value={TabType.LOCATIONS}>
					<LocationFavorites />
				</TabPanel>
			</TabContext>
		</PageContainer>
	);
};
