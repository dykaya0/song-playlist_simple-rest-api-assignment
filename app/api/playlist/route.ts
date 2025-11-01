// app/api/playlist/route.ts
import { NextResponse } from "next/server";

type Song = {
    id: number;
    title: string;
    artist: string;
    duration: number; // in seconds
};

let playlist: Song[] = [
    { id: 1, title: "Let Down", artist: "Radiohead", duration: 142 },
    { id: 2, title: "Yellow", artist: "Coldplay", duration: 120 },
    { id: 3, title: "The Less I Know the Better", artist: "Tame Impala", duration: 168 },
];

// GET: Return all songs
export async function GET() {
    return NextResponse.json({ playlist });
}

// POST: Add a new song
export async function POST(req: Request) {
    const body = await req.json();
    const { title, artist, duration } = body;

    if (!title || !artist || !duration)
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const newSong = {
        id: Date.now(),
        title,
        artist,
        duration,
    };

    playlist.push(newSong);
    return NextResponse.json({ message: "Song added", song: newSong });
}

// DELETE: Remove a song by ID or clear all
export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
        const index = playlist.findIndex((song) => song.id === Number(id));
        if (index === -1)
            return NextResponse.json({ error: "Song not found" }, { status: 404 });

        const removed = playlist.splice(index, 1);
        return NextResponse.json({ message: "Song removed", removed });
    } else {
        playlist = [];
        return NextResponse.json({ message: "Playlist cleared" });
    }
}
