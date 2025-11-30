// app/books/page.tsx
import Link from "next/link";
interface Book {
  id: number;
  title: string;
  author: string;
}

const BooksPage = async () => {
  // Fetch books from your API
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  
  if (!res.ok) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Books Collection</h1>
        <p>Failed to load books. Please try again later.</p>
      </main>
    );
  }
  
  const books: Book[] = await res.json();

  return (
    <main style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Books Collection</h1>
      <p style={{ color: "#666", marginBottom: 30 }}>
        Browse our collection of {books.length} books. Click on any book to view details.
      </p>

      <div style={{ display: "grid", gap: 15 }}>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              padding: 20,
              border: "1px solid #e0e0e0",
              borderRadius: 8,
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            className="book-item"
          >
            <Link 
              href={`/books/${book.id}`}
              style={{ 
                textDecoration: "none",
                color: "inherit",
                display: "block"
              }}
            >
              <h3 style={{ 
                margin: "0 0 10px 0", 
                color: "#1a0dab",
                fontSize: "20px"
              }}>
                {book.title}
              </h3>
              <p style={{ 
                margin: "0 0 8px 0", 
                color: "#666",
                fontSize: "16px"
              }}>
                by <strong>{book.author}</strong>
              </p>
              <span style={{ 
                color: "#888", 
                fontSize: "14px",
                display: "inline-block",
                padding: "4px 8px",
                backgroundColor: "#f5f5f5",
                borderRadius: 4
              }}>
                ID: {book.id}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BooksPage;