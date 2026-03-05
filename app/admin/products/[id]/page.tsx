import EditProduct from "./component/page"


export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EditProduct id={id} />;
}
