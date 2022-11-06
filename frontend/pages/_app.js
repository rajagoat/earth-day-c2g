import '../styles/globals.css'
import { FarmersContextProvider } from '../context/FarmersContext';

function MyApp({ Component, pageProps }) {
  return (
    <FarmersContextProvider>
      <Component {...pageProps} />
    </FarmersContextProvider>
  )
}

export default MyApp
