import Input from "../inputs";
import { FlexBox } from "../../styles/globals";
import Text from "../text";
import { ImgPlaceholder } from "../../styles/globals";
import { useState } from "react";

export default function ChatNavBar({

}){
    return(
    <FlexBox width="100%">
        <FlexBox>
        <Input placeholder="Type a Message Here"></Input>
        </FlexBox>
    </FlexBox>
    )
}




