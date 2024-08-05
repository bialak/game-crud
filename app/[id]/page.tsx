import EditGameForm from "@/components/EditGameForm";

export const metadata = {
  title: "Edit game",
  description: "Here you can edit game that you added",
};

export default function EditPage({ params }: { params: { id: number } }) {
  return <EditGameForm gameId={params.id} />;
}
