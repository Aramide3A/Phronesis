import ServiceDetailPage from "./ServiceDetailPage";
import { getService } from "../utils/serviceLookup";

export default function ShippingPage() {
  return <ServiceDetailPage service={getService("shipping")} />;
}
