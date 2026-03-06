import ServiceEditPage from '@/modules/actores/pages/ServiceEditPage';
import { getService } from '@/modules/actores/services/providerService';
  
export default async function EditServicePage({
  params,
  }: {
    params: { serviceId: string };
  }) {
  const { serviceId } = await params;
  const  service =await getService(serviceId);

  return <ServiceEditPage service={service} />;
}