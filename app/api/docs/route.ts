// app/api/docs/route.ts
import { NextResponse } from "next/server";

const swaggerDoc = {
    openapi: "3.0.0",
    info: {
        title: "Playlist API",
        version: "1.0.0",
        description: "Simple in-memory playlist API (Next.js + Swagger)",
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local dev server",
        },
    ],
    paths: {
        "/playlist": {
            get: {
                summary: "Get all songs",
                responses: {
                    200: {
                        description: "List of songs",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        playlist: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    id: { type: "integer" },
                                                    title: { type: "string" },
                                                    artist: { type: "string" },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                summary: "Add a new song",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: { type: "string" },
                                    artist: { type: "string" },
                                    duration: { type: "string" },
                                },
                                required: ["title", "artist", "duration"],
                            },
                        },
                    },
                },
                responses: {
                    200: { description: "Song added successfully" },
                },
            },
            delete: {
                summary: "Delete a song or clear playlist",
                parameters: [
                    {
                        name: "id",
                        in: "query",
                        schema: { type: "integer" },
                        required: false,
                        description: "Song ID to delete. If omitted, clears entire playlist.",
                    },
                ],
                responses: {
                    200: { description: "Song removed" },
                },
            },
        },
    },
};

export async function GET() {
    return NextResponse.json(swaggerDoc);
}
