import { type NextRequest, NextResponse } from 'next/server'
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')

  const url = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}&scope=user+repo`;

  console.log(url);
  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
        },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return new NextResponse(json.access_token);
  } catch (error) {
    console.error((error as Error)?.message);
  }
}