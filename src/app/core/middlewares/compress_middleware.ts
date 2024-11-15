import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const encoding = request.headers.get('accept-encoding');

  if (encoding?.includes('br')) {
    return NextResponse.next({
      headers: {'Content-Encoding': 'br'},
    });
  } else if (encoding?.includes('gzip')) {
    return NextResponse.next({
      headers: {
        'Content-Encoding': 'gzip',
      },
    });
  }

  // Responde normalmente se não houver suporte para compactação
  return NextResponse.next();
}
