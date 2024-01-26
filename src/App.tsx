import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy, useState } from "react";
import Loader from "./Loader";
import AdoptedPetContext from "./AdoptedPetContext";
import DetailsErrorBoundary from "./Details";
import { Pet } from "./APIResponsesTypes";

const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null as Pet | null);
  return (
    <div>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loader />}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<DetailsErrorBoundary />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </div>
  );
};

export default App;
