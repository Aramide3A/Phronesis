import ServiceDetailPage from "./ServiceDetailPage";
import { getService } from "../utils/serviceLookup";

export default function MarineVesselSupplyPage() {
  return <ServiceDetailPage service={getService("marine-vessel-supply")} />;
}
