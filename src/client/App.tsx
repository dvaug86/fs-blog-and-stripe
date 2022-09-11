import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';

//Cards for views path
import NavBar from './components/Navbar';
import ComposePage from './Views/ComposePage';
import HomePage from './Views/HomePage';
import DetailsPage from './Views/DetailsPage';
import AdminPage from './Views/AdminPage';
import Donate from './Views/Donate';


const stripePromise = loadStripe('pk_test_51LgDgIF1AWCN5eL71QnjFx9BvMuaYcRbVyo0AfBx8aNqSxzObrJSB0M2huNQJj5s8KEyUdwlwLakzgEOZSgMFs4I00h31Co8Ct')

const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/compose' element={<ComposePage />} />
				<Route path='/details/:blogid' element={<DetailsPage />} />
				<Route path='/admin/:blogid' element={<AdminPage />} />
				<Route
					path="/donate"
					element={(
						<Elements stripe={stripePromise}>
							<Donate />
						</Elements>
					)}
				/>
			</Routes>
		</BrowserRouter>
	)
}

interface AppProps { }

export default App;