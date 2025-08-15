import { caller, getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Client } from "./client";


const Page = async  ()=>{
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"JOHN"}));
  
  return (
   <HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<div>Loading...</div>}>
     <Client />
   </Suspense>
   </HydrationBoundary>
  )
}

export default Page