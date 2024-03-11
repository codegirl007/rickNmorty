import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type Props = {
	component: ReactElement;
	authorized: boolean;
};

export const ProtectedContent = (props: Props): ReactElement => {
	return props.authorized ? props.component : <Navigate to={"/login"} />;
};
