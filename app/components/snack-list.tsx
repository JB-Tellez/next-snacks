import SnackItem from "./snack-item";
import { Snack } from '@/app/types';

export default function SnackList({ snacks }: { snacks: Snack[] }) {
    return (
      <ul className="space-y-4 w-full">
        {snacks.map((snack: Snack) => <SnackItem key={snack.id} snack={snack} />)}
      </ul>
    );
  }
  