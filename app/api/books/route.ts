// api/books/route.ts
import { NextResponse } from "next/server";


// Dummy books data
const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
];

export async function GET() {
    return NextResponse.json(books);
}
