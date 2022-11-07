import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext';
import { FarmersContextProvider } from '../context/FarmersContext';
import { GleanersContextProvider } from '../context/GleanersContext';
import { FoodBanksContextProvider } from '../context/FoodBanksContext';
import { FoodBankWorkersContextProvider } from '../context/FoodBankWorkersContext';
import { GleaningActivitiesContextProvider } from '../context/GleaningActivitiesContext';
import { GleaningGroupsContextProvider } from '../context/GleaningGroupsContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  )
}

export default MyApp
