import { SearchProvider } from "~/contexts/SearchContext";
import { CaptureScreen } from "~/pages/capture";

export default function CaptureRoute() {
  return (
    <SearchProvider>
      <CaptureScreen />
    </SearchProvider>
  );
}
