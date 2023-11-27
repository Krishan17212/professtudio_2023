import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import DetailPage from './pages/detailPage/DetailPage'
import ExplorePage from './pages/explorePage/ExplorePage'
import SearchResult from './pages/searchResult/SearchResult'
import Error from './pages/404/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path=':mediaType/:id' element={<DetailPage />} />
      <Route path='explore/:mediaType' element={<ExplorePage />} />
      <Route path='search/:query' element={<SearchResult />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
