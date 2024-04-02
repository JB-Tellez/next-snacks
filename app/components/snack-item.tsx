import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Snack } from '@/app/types';
import DeleteIcon from "./delete-icon";
import EditIcon from "./edit-icon";
import MagnifyingGlassIcon from "./magnfying-glass-icon";


export default function SnackItem({ snack }: { snack: Snack }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{snack.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
                <CardDescription>{snack.description}</CardDescription>
                <div className="flex">
                    <MagnifyingGlassIcon id={snack.id} />
                    <DeleteIcon id={snack.id} />
                    <EditIcon id={snack.id} />
                </div>
            </CardContent>

        </Card>
    );
}
