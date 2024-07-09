export default function CreateResponseStream(LoopFn: () => {}, LoopSleep: number) {
  // Encoder Logic:
  const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))
  const encoder = new TextEncoder()
  async function* makeIterator() {
    // TODO - MAKE SOMETHING THAT STOPS THE LOOP
    while (true) {
      const data = LoopFn()
      yield encoder.encode(JSON.stringify(data))
      await sleep(LoopSleep)
    }
  }

  // Stream Response:
  const iterator = makeIterator()
  const stream = new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
      if (done) controller.close()
      else controller.enqueue(value)
    }
  })

  // Return Stream:
  return stream
}
