import '../styles/globals.css'
import { FarmersContextProvider } from '../context/FarmersContext';
import { GleanersContextProvider } from '../context/GleanersContext';
import { FoodBanksContextProvider } from '../context/FoodBanksContext';
import { FoodBankWorkersContextProvider } from '../context/FoodBankWorkersContext';
import { GleaningActivitiesContextProvider } from '../context/GleaningActivitiesContext';
import { GleaningGroupsContextProvider } from '../context/GleaningGroupsContext';
import "../styles/styles.css"
function MyApp({ Component, pageProps }) {
  return (
    <FarmersContextProvider>
      <GleanersContextProvider>
        <FoodBanksContextProvider>
          <FoodBankWorkersContextProvider>
            <GleaningActivitiesContextProvider>
              <GleaningGroupsContextProvider>
                <Component {...pageProps} />
              </GleaningGroupsContextProvider>
            </GleaningActivitiesContextProvider>
          </FoodBankWorkersContextProvider>
        </FoodBanksContextProvider>
      </GleanersContextProvider>
    </FarmersContextProvider>
  )
}

export default MyApp
