import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import React from "react";
import { Characters } from "../components/mainLists/Characters";
import { Locations } from "../components/mainLists/Locations";
import { TabType, filterStore } from "../stores/filterStore";
import { PageContainer } from "../components/layout/PageContainer";

export const HomePage = (): JSX.Element => {
	const tabType = filterStore.useStore((state) => state.tabType);

	return (
		<PageContainer>
			<TabContext value={tabType}>
				<TabList
					onChange={(_event, newTab) => {
						filterStore.setTabType(newTab);
						filterStore.resetPage();
					}}
				>
					<Tab label="Characters" value={TabType.CHARACTERS} />
					<Tab label="Locations" value={TabType.LOCATIONS} />
				</TabList>
				<TabPanel value={TabType.CHARACTERS}>
					<Characters />
				</TabPanel>
				<TabPanel value={TabType.LOCATIONS}>
					<Locations />
				</TabPanel>
			</TabContext>
		</PageContainer>
	);
};
