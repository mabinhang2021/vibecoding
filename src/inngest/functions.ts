import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //image this is a download long time
    await step.sleep("wait-a-moment", "30s");

    //image this is a transcript from ai
    await step.sleep("wait-a-moment", "10s");

    //image this is a summary from ai
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);