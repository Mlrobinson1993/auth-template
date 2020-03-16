import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';
import AccountPageForm from '../form/AccountPageForm';

export default function Account() {
	const { activeUser } = useContext(AuthContext);
	console.log(activeUser);

	return (
		<Container>
			<AccountPageForm />
		</Container>
	);
}

const Container = styled.div`
	min-height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;