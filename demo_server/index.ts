const server = async (req: Request): Promise<Response> => {

  return new Response(
    'Hello',
  )
}

// I like that Deno has a built in server.
// That's really convenient.
Deno.serve(server);