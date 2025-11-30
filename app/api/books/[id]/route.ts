// app/api/books/[id]/route.ts
import { NextResponse } from "next/server";

const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
];

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;


        // Convert to number
        const bookId = parseInt(id);

        // Check if it's a valid number
        if (isNaN(bookId)) {
            return NextResponse.json({ error: "Invalid book ID" }, { status: 400 });
        }

        // Find the book
        const book = books.find((b) => b.id === bookId);
        if (!book) {
            return NextResponse.json({ error: "Book not found" }, { status: 404 });
        }

        return NextResponse.json(book);
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}