import { NextResponse } from 'next/server'

export default function middleware(request, event) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-url', request.url)
  return response
}

