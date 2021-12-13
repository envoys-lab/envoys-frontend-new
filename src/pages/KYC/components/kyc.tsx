import React, { FormEvent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import upload from '../img/icons-upload.png';
import { log } from 'util';
import { getUser } from '../redux/reducers/user';
import { useDispatch } from 'react-redux';

const FormWrapper = styled.form`
  max-width: 670px;
  background: white;
  border-radius: 14px;
  padding: 21px 30px;
  margin: 0 auto;
`;

const FormHeader = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  text-align: center;
  /* Dark clear */
  color: #f48020;
  border-bottom: 4px solid #f48020;
  padding-bottom: 10px;
`;

const FormTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  margin-top: 51px;
  color: #0f2b46;
  margin-bottom: 30px;
`;

const FormInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FormInput = styled.input`
  background: #f9f9f9;
  /* under layer */

  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  border-radius: 14px;
  width: 300px;
  height: 60px;
  margin-bottom: 10px;
  padding-left: 30px;

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    /* Main_Dark */

    color: #133d65;

    opacity: 0.5;
  }
`;

const FormSelect = styled.select`
  position: relative;
  background: #f9f9f9;
  /* under layer */
  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  border-radius: 14px;
  width: 300px;
  height: 60px;
  margin-bottom: 10px;
  padding: 13px 15px 13px 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #045599;
  &:nth-child(3) {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #869baf;
  }
`;

const SelectPhotoInput = styled.div`
  background: #f9f9f9;
  /* under layer */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  border-radius: 14px;
  width: 300px;
  height: 60px;
  margin-bottom: 10px;
  padding: 13px 15px 13px 30px;
`;

const HideInput = styled.input`
  position: absolute;
  overflow: hidden;
  z-index: -1;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
`;

const Placeholder = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  /* Main_Dark */

  color: #133d65;

  opacity: 0.5;
`;

const GetId = styled.div`
  background: #f9f9f9;
  /* light blue */

  border: 1px solid #2261da;
  box-sizing: border-box;
  border-radius: 14px;
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 14px;
  /* identical to box height */

  /* Main_Dark */

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  /* identical to box height */

  /* Main_Dark */

  color: #133d65;
`;

const InfoBlock = styled.div`
  max-width: 610px;
  padding: 19px 25px;
  background: rgba(54, 111, 221, 0.05);
  border-radius: 16px;
  color: #2261da;
  margin-top: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;

  /* light blue */

  color: #2261da;

  opacity: 0.7;
  margin-bottom: 30px;
`;

const InfoBlockParag = styled.p`
  max-width: 565px;
`;

const BtnBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1320px) {
    display: flex;
    justify-content: center;
  }
`;

const SendBtn = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
  padding: 19px 50px;
  background: #2261da;
  border-radius: 14px;
  border-style: none;
  display: flex;
  align-self: center;
`;

const Kyc: React.FC = () => {
  const random = Math.round(Math.random() * 10000000);

  const [frontImg, setFrontImg] = useState<string>('');
  const [backImg, setBackImg] = useState<string>('');
  const [selfie, setSelfie] = useState<string>('');

  const dispatch = useDispatch();

  const sendData = (e: any) => {
    e.preventDefault();
    dispatch(
      getUser(
        e.target.children[2].children[0].value,
        e.target.children[2].children[1].value,
        e.target.children[2].children[2].value,
        e.target.children[2].children[3].value,
        frontImg,
        backImg,
        `${random}`,
        selfie,
      ),
    );
  };

  const getFrontImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const createUrl: any = e.target.files?.[0];
    if (createUrl) {
      const reader = new FileReader();
      reader.readAsDataURL(createUrl);
      reader.onload = () => {
        setFrontImg(`${reader.result}`);
      };
    }
  };
  const getBackImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const createUrl: any = e.target.files?.[0];
    if (createUrl) {
      const reader = new FileReader();
      reader.readAsDataURL(createUrl);
      reader.onload = () => {
        console.log(`${reader.result}`);
        setBackImg(`${reader.result}`);
      };
    }
  };
  const getSelfieImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const createUrl: any = e.target.files?.[0];
    if (createUrl) {
      const reader = new FileReader();
      reader.readAsDataURL(createUrl);
      reader.onload = () => {
        setSelfie(`${reader.result}`);
      };
    }
  };

  return (
    <FormWrapper onSubmit={sendData} id="form">
      <FormHeader>My KYC</FormHeader>
      <FormTitle>Corporate basic information</FormTitle>
      <FormInputs>
        <FormSelect id="select">
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Kyrgystan">Kyrgystan</option>
        </FormSelect>

        <FormInput required type="text" id="name" placeholder="Full name" />
        <FormSelect>
          <option selected disabled>
            Type of ID
          </option>
          <option value="">Passport</option>
          <option value="">Ukraine</option>
          <option value="">Kyrgystan</option>
        </FormSelect>
        <FormInput required type="text" placeholder="Enter your number ID" />
        <SelectPhotoInput>
          <HideInput id="front" onChange={getFrontImgHandler} type="file" />
          <Placeholder>Upload Front side card photo</Placeholder>
          {frontImg === '' ? (
            <label htmlFor="front">
              <img src={upload} alt="err" />
            </label>
          ) : (
            <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={frontImg} alt="" />
          )}
        </SelectPhotoInput>
        <SelectPhotoInput>
          <HideInput required id="back" onChange={getBackImgHandler} type="file" />
          <Placeholder>Upload Back side card photo</Placeholder>
          {backImg === '' ? (
            <label htmlFor="back">
              <img src={upload} alt="err" />
            </label>
          ) : (
            <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={backImg} alt="" />
          )}
        </SelectPhotoInput>
        <GetId>
          You ID Envoys Vision: <b>{random}</b>
        </GetId>
        <SelectPhotoInput>
          <HideInput id="selfie" onChange={getSelfieImgHandler} type="file" />
          <Placeholder>Passport self holding</Placeholder>
          {selfie === '' ? (
            <label htmlFor="selfie">
              <img src={upload} alt="err" />
            </label>
          ) : (
            <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={selfie} alt="" />
          )}
        </SelectPhotoInput>
        <InfoBlock>
          <InfoBlockParag>
            {' '}
            The image file format must be jpg or png, the file size cannot exceed 4 MB. The face must be clearly
            visible! The note must be clearly legible! The passport must be clearly legible 3. Please upload photos of
            materials in strict accordance with the requirements, otherwise your certification will not pass the audit,
            save your precious time!
          </InfoBlockParag>
        </InfoBlock>
      </FormInputs>
      <BtnBlock>
        <SendBtn type="submit">Send and Confirm</SendBtn>
      </BtnBlock>
    </FormWrapper>
  );
};

export default Kyc;
