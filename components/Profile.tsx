import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
interface IProfile {
  profileImage: string;
  name: string;
  dueDate: string;
}
const ProfileContainer = styled.figure`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-bottom: 5px;
  img {
    flex:1;
  }
  figcaption {
    flex:2;
    padding-left: 15px;

    span {
      display: block;
      line-height: 20px;
    }
  }
`;
const NameContainer = styled.span`
  font-size: 15px;
  color: #777;
  font-weight: 700;
`;
const DueDateContainer = styled.span`
  color: #999;
  font-size: 13px;
`;
const Profile: FunctionComponent<IProfile> = ({ profileImage, name, dueDate }) => {
  return (
    <ProfileContainer>
      <Image
        src={`/profile/${profileImage}`}
        alt="프로필 이미지"
        width="45"
        height="45"
      />
      <figcaption>
        <NameContainer>{name}</NameContainer>
        <DueDateContainer>{dueDate}</DueDateContainer>
      </figcaption>
    </ProfileContainer>
  );
};

export default Profile;
