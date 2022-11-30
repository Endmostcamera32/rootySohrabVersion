import { useEffect } from "react";
import io from "socket.io-client";
import { Wrapper } from "../../styles/globals";
import {prisma} from "../../server/db/client";
import DialogBox from "../../components/chat/dialogueBox"
import { useRouter } from "next/router";


export default function Chat({allTheChatsThatUserWasInJson}) {

  const router = useRouter()
  
  function handleClickChat(chatRoom) {
    router.push(`/chat/${chatRoom}`)
  }

  return (
    <>
      <Wrapper
        padding="0 0 50px 0"
        justifyContent="flex-start"
        alignItems="flex-start"
        dir="column"
        height="fit-content"
      >
        <h1>Chats</h1>

        { allTheChatsThatUserWasInJson.map(m => <DialogBox {...m} userName={m.userTwo.name} onClick={handleClickChat} />)}

      </Wrapper>
    </>
  );
}



export async function getServerSideProps(context) {

  const allChatsForThisUser = await prisma.chatRoom.findMany({
    where:{
      userOneId: 1
    }, 
    include: {
      userTwo: true
    }
  })

  const allTheChatsThatUserWasInJson = JSON.parse(JSON.stringify(allChatsForThisUser))
  console.log(allTheChatsThatUserWasInJson);

  return {
    props: {
      allTheChatsThatUserWasInJson
    }
  }
}