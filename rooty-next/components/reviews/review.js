import styled from "styled-components";
import Image from 'next/image';
import { FlexBox, Wrapper, ImgPlaceholder } from "../../styles/globals";
import Text from "../text";
import { Icon } from "semantic-ui-react";
import { Heart } from "../icons/icons";
import DisabledStars from "../icons/starsDisabled";
// import Avatar from '@mui/material/Avatar';


export default function Review({
    name="name",
    comment="Comment",
    program="D3",
    image="/3081629.jpg",
    one="active icon", 
    second="active icon", 
    third="active icon", 
    fourth="active icon", 
    fifth="icon",
    boxHeight="108px",
    nameSize="16px",
    borderColor="0.5px solid rgba(191, 191, 191, 1)"
    // showStars=true
}) {

    return (
          <FlexBox width="100%" minHeight={boxHeight} border={borderColor}>
                <FlexBox width = "25%">
                    <ImgPlaceholder height="50px" width="50px" bgImage={image} borderRadius="50%"></ImgPlaceholder>
                </FlexBox>
                <FlexBox dir="column" alignItems="flex-start" margin="10px" width = "80%">
                    <FlexBox justifyContent="space-between" alignItems="center" width="100%">
                        <Text txt={name} weight="bold" size={nameSize}></Text>
                        <FlexBox padding="0 10px 0 10px">
                            <DisabledStars
                            one={one}
                            second={second}
                            third={third}
                            fourth={fourth}
                            fifth={fifth}
                            ></DisabledStars>
                        </FlexBox>
                    </FlexBox>
                    <Text txt={program}></Text>
                    <Text txt={comment}></Text>
                </FlexBox>
          </FlexBox>
    );
  };

