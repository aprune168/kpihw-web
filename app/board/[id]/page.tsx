export default function BoardDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Board Detail</h1>
      <p>{id}</p>
    </div>
  );
}
