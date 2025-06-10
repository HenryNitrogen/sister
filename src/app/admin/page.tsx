import {isAdmin} from "@/lib/admin";

export default async function AdminPage() {
    const ok = await isAdmin();
    if (!ok) {
        return <div>Access Denied</div>;
    }
    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome to the admin page!</p>
        </div>
    )
}