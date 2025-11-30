// app/testFetch/page.tsx

export default async function TestFetchPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums", {
        cache: "no-store", // always fresh
    });

    const albums = await res.json();

    return (
        <div style={{ padding: 20 }}>
            <h1>Albums (Server Fetched)</h1>
            <ul>
                {albums.slice(0, 10).map((album: any) => (
                    <li key={album.id}>
                        <strong>{album.title}</strong>
                        <p>{album.userId}</p>
                        <img src={album.image} alt={album.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
