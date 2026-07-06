import ServiceDetailPage from "./ServiceDetailPage";
import { getService } from "../utils/serviceLookup";

export default function LogisticsPage() {
  return <ServiceDetailPage service={getService("logistics")} />;
}
