export const dynamic = "force-static"
// caching only work with GET methods

export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString })
}