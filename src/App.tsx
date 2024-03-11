import React from "react";
import { StylesProviders } from "./styles/StylesProviders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedContent } from "./pages/ProtectedContent";
import { MainProtectedLayout } from "./components/layout/MainProtectedLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RandomPage } from "./pages/RandomPage";
import { FavoritePage } from "./pages/FavoritePage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CharacterDetail } from "./pages/detailPages/CharacterDetail";
import { LocationDetail } from "./pages/detailPages/LocationDetail";
import { NotificationContainer } from "./components/notification/NotificationContainer";
import { authStore } from "./stores/authStore";

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } } });

export const App = (): JSX.Element => {
	const authorized = authStore.useStore((state) => state.authorized);
	return (
		<StylesProviders>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<LoginPage authorized={authorized} />} />
						<Route path="/" element={<ProtectedContent authorized={authorized} component={<MainProtectedLayout />} />}>
							<Route path="/" element={<HomePage />} />
							<Route path="/random" element={<RandomPage />} />
							<Route path="/favorite" element={<FavoritePage />} />
							<Route path="/character/:characterId" element={<CharacterDetail />} />
							<Route path="/location/:locationId" element={<LocationDetail />} />
							<Route path="/*" element={<NotFoundPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<NotificationContainer />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</StylesProviders>
	);
};
