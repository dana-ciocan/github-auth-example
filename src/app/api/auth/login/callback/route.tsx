import { type NextRequest, NextResponse } from 'next/server'
 
export async function GET(request: NextRequest) {
  // Get the value of the code query parameter from the URL
  const code = request.nextUrl.searchParams.get('code')

  // Prepare the URL for the POST request
  // Notice that this time we have to pass both our client ID _and_ our client secret
  // As well as the code we were given in the first step
  const url = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`;

  try {
    // Send a post request to the Github authorisation server
    // This should return our access token 
    // The Accept header is important here so we get JSON back
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // Get the access token and display it so we can see that it worked
    const json = await response.json();
    return new NextResponse(`Access token: ${json.access_token}`);
  } catch (error) {
    console.error((error as Error)?.message);
  }
}