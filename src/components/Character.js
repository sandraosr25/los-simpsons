import styled from "styled-components";

export default function Character(props) {
    const {dataCharacter} = props;
    const {character, image, quote} = dataCharacter;
    console.log(dataCharacter);
    return (
        <ContentCharacter>
            <Title>{character}</Title>
            <ContentImage>
                <Image src={image} alt={character} />
            </ContentImage>
            <Quote>{quote}</Quote>
        </ContentCharacter>
    );
};

const ContentCharacter = styled.div`
    padding: 20px;
    border: 1px solid #2a9d8f;
    border-radius: 20px;
    width: 300px;
    text-align: center;
    margin: 10px;
    &:hover{filter:brightness(60%)};

`;

const Title = styled.h2`
    color: #264653;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const ContentImage = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 130px;
    height: auto;
`;

const Quote = styled.h4`
    color: #2a9d8f;
    height: 100px;
`;

