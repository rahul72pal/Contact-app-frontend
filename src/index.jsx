import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient,QueryClientProvider} from 'react-query'
import Context from './components/Context'

const queryclient= new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')).render(
	
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <Context>
      		<App/>
        </Context>
      </QueryClientProvider>
    </BrowserRouter>
	
)