import ServiceDetailPage from "./ServiceDetailPage";
import { getService } from "../utils/serviceLookup";

export default function PetroleumProductsHaulagePage() {
  return <ServiceDetailPage service={getService("petroleum-products-haulage")} />;
}
