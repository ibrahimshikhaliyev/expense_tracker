import { fetcher } from "@/api/expenses";
import Dashboard from "@/components/dashboard/Dashboar";

// Server Component
const Home = async () => {
  const initialData = await fetcher("/expenses");
  return <Dashboard initialData={initialData} />;
};

export default Home;
