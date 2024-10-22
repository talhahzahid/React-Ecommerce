
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Page/Home.jsx'
import Singleproduct from './Page/Singleproduct.jsx'
import NotFind from './Page/NotFind.jsx'
import { Provider } from 'react-redux'
import { store } from './Config/Redux-config/store/store.js'
import UserCart from './Page/userCart.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "singleproduct/:id",
                element: <Singleproduct />
            },
            {
                path: "usercart",
                element: <UserCart/>
            },
            {
                path: "*",
                element: <NotFind />
            },
        ]
    }
])
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

)
