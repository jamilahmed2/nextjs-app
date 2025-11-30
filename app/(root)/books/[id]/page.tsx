// app/books/[id]/page.tsx
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
}

const BookDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  try {
    // Fetch the specific book from API
    const res = await fetch(`http://localhost:3000/api/books/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json();
      return (
        <main style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
          <h1>Book Not Found</h1>
          <p>Sorry, we couldn't find a book with ID: {id}</p>
          <p style={{ color: "#d32f2f" }}>Error: {errorData.error}</p>
          <Link 
            href="/books" 
            style={{ 
              color: "blue", 
              textDecoration: "underline",
              display: "inline-block",
              marginTop: 20
            }}
          >
            ← Back to all books
          </Link>
        </main>
      );
    }

    const book: Book = await res.json();

    return (
      <main style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
        {/* Back Navigation */}
        <div style={{ marginBottom: 30 }}>
          <Link 
            href="/books" 
            style={{ 
              color: "blue", 
              textDecoration: "none",
              fontSize: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: 8
            }}
          >
            ← Back to all books
          </Link>
        </div>

        {/* Book Details Card */}
        <div style={{
          border: "1px solid #e0e0e0",
          borderRadius: 12,
          padding: 40,
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}>
          <h1 style={{ 
            margin: "0 0 20px 0", 
            fontSize: "32px",
            color: "#333"
          }}>
            {book.title}
          </h1>
          
          <div style={{ 
            fontSize: "20px", 
            color: "#666",
            marginBottom: 15
          }}>
            by <strong style={{ color: "#333" }}>{book.author}</strong>
          </div>
          
          <div style={{ 
            display: "inline-block",
            padding: "8px 16px",
            backgroundColor: "#f0f0f0",
            borderRadius: 20,
            color: "#666",
            fontSize: "14px"
          }}>
            Book ID: {book.id}
          </div>
        </div>

        {/* Additional Navigation */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ color: "#666", marginBottom: 15 }}>Explore more:</p>
          <Link 
            href="/books" 
            style={{ 
              color: "white",
              backgroundColor: "#0070f3",
              padding: "10px 20px",
              borderRadius: 6,
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            View All Books
          </Link>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
        <h1>Error Loading Book</h1>
        <p>There was an error loading the book details. Please try again.</p>
        <Link 
          href="/books" 
          style={{ 
            color: "blue", 
            textDecoration: "underline",
            display: "inline-block",
            marginTop: 20
          }}
        >
          ← Back to all books
        </Link>
      </main>
    );
  }
};

export default BookDetails;