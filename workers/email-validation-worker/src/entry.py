from workers import Response, WorkerEntrypoint
from submodule import get_hello_message
class Default(WorkerEntrypoint):
    async def fetch(self, request):
        print(await request.json())
        return Response(get_hello_message())
