import { SearchProvider } from "~/contexts/SearchContext";
import { HomeScreen } from "~/pages/home";

export default function HomeRoute() {
  return (
    <SearchProvider>
      <HomeScreen />
    </SearchProvider>
  );
}
