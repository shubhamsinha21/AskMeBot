import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";

// define interface
interface PageProps {
  // declare params -
  // we receive url as string, string array or undefined
  params: {
    url: string | string[] | undefined;
  };
}

function reconstructUrl({ url }: { url: string[] }) {
  // decoeding the url and its a string
  const decodedComponent = url.map((component) =>
    decodeURIComponent(component)
  );
  return decodedComponent.join("/");
}

// params are objects
const page = async ({ params }: PageProps) => {
  const reconstructedUrl = reconstructUrl({
    // url property
    url: params.url as string[],
  });

  //   checking indexing of data
  // sisember is a set of unique values for checking the presence of reconstructed url in a set called indexed-url
  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructedUrl
  );
  // console.log(params) ;
  // console.log("isAlreadyIndexed", isAlreadyIndexed);

  //   avoid inexing data everytime we reload - use upstash redis
  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    await redis.sadd("indexed-urls", reconstructedUrl);
  }

  //   implementing sessions
  const sessionId = "mock sessions";

  return <ChatWrapper sessionId={sessionId} />;
};

export default page;
