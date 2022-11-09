import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../../styles/globals";
import Text from "../text";
import { Icon } from "semantic-ui-react";
import { Heart } from "../icons/icons";
import DisabledStars from "../icons/starsDisabled";

export default function DialogueBox({
    image="/face3.jpg",
    PostTitle="Logo Design",
    UserName="Samantha Brown"

}){
    return(
        <FlexBox width="88%" height="60px" justifyContent="flex-start" padding="0 3px 0 3px" margin="9px">
                    <ImgPlaceholder margin="0 5px 0 5px" height="50px" width="50px" bgImage={image} borderRadius="50%"></ImgPlaceholder>
                <FlexBox width="265px" dir="column" alignItems="flex-start" margin="0 10px 0 13px">
                    <Text txt={PostTitle} size="18px" padding="2px"></Text>
                    <Text txt={UserName} size="15px" padding="2px"></Text>
                </FlexBox>       
          </FlexBox>
    )
}