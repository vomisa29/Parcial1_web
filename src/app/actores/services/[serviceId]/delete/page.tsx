export default async function EditServicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const { serviceId } = await params;

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">
        Borrar Servicio con ID: {serviceId}
      </h1>
      {/* Form here */}
    </main>
  );
}