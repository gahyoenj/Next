import ClientComponent from "@/app/components/client-component";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      search 페이지 :{q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
