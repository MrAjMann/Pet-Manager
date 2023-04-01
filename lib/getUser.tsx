export default async function getUser(userId: String) {
	const res = await fetch(`http://localhost:3000/api/user/${userId}`);

	if (!res.ok) throw new Error("failed to fetch user");

	return res.json();
}
