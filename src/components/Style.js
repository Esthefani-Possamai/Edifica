import styled from "styled-components";


export const BackImg = styled.div`
    background: linear-gradient(132deg, rgba(254,255,255,1) 14%, rgba(250,250,250,1) 29%, rgba(222,224,224,1) 78%);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    font-weight: 100;
    font-size: 18px;
    padding-top: 15px;
`;

export const Title = styled.h1 `
    font-family: 'Rozha One', serif;
    font-weight: 100;
    font-size: 40px;
`;

export const Header = styled.header `
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Nav = styled.nav `
    ul {
    display: flex;
    list-style-type: none;
    list-style: none;
    }

    ul li a {
        text-decoration: none;
        margin-right: 50px;
        color: #2d2d29;
    }
`;

export const Foote = styled.footer `
    padding: 2% 0%;
    text-align: center;

    nav ul li a {
        text-decoration: none;
        color: #2d2d29;
        padding: 0% 20px;
    }

    nav ul {
        list-style-type: none;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav li {
        scale: 1.8;
    }

    p {
        margin-top: 20px;
    }
`;

export const SectionHome = styled.section `
    width: 100%;
    height: 80vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1, p {
        margin: 20px;
    }
`;

export const LinkBtn2 = styled.div `
    border: 2px solid black;
    border-radius: 20px;
    text-decoration: none;
    color: #2d2d29;
    padding: 10px;
    margin: 20px;
    text-align: center;
    cursor: pointer;

`;

export const Msg = styled.div `
    width: 50%;
    padding: 1em;
    border: 1px solid black;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2em;
    border-radius: 5px;
    text-decoration: none;
`;

export const category_text = styled.div `
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #215a6d;
`;

export const Projeto = styled.section `
    background-color: white; 
    display: flex;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid none;
    box-shadow: 0 2px 5px gray;
    width: 20%;
    padding: 2%;
    margin: 1% ;
    font-weight: 100;
    font-size: 18px;
`;

export const OrganizaProj = styled.section `
    display: flex;
    align-items: stretch;
    margin: 2%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProjSection = styled.section `

    margin: 3%;
    font-weight: 100;
    font-size: 18px;

    h1 {
        font-weight: 100;
        font-size: 30px;
}
    h3 {
        font-weight: 100;
        font-size: 20px;
        text-align: center;
        margin-top: 2%;
    }

    p{
        padding-top: 1%;
    }
`;

export const FormCriar = styled.form `

    margin: 2% 0%;

Input {
    margin: 10px 10px;
}

Select {
    margin: 10px 0px;
}

Button {
    margin: 10px 0px;
}

`;

export const InputForm = styled.input `
    padding: 5px;
    border-radius: 10px;
    border: 1px solid grey;
`;

export const SelectAll = styled.div `

label {
  margin: 0px 10px 0px 0px;
}

`;

export const SelectForm = styled.select `
    padding: 5px;
    border-radius: 10px;
    border: 1px solid grey;
    background: none;
    color: grey;

option {
    color: black;
}
`;

export const CriarButton = styled.div `

button {
    padding: 10px 5px;
    width: 200px;
    cursor: pointer;
    margin: 10px 10px 10px 0px;
    border-radius: 10px;
    border: 1px solid grey;
    text-decoration: none;
    color: black;
    font-weight: 100;
    font-size: 18px;
    width: 130px;
    cursor: pointer;
    background-color: transparent;
}
`;

export const ButtonLink = styled.button ` 
    padding: 10px 5px;
    width: 130px;
    border-radius: 10px;
    border: 1px solid grey;
    cursor: pointer;
    margin-top: 25px;
    background-color: transparent; 
    font-weight: 100;
    font-size: 18px;
`;



export const ProjetosAll = styled.section `
    margin: 3%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h2 {
        font-weight: 100;
        font-size: 30px;
    }

`;

export const ArticleProj = styled.article `
    font-weight: 100;
    font-size: 18px;

h1 {
    font-weight: 100;
    font-size: 30px;
}

h2{
    font-weight: 100;
    font-size: 30px;
}

`;

export const CardAll = styled.div `

span {
    padding: 10px 5px;
    width: 200px;
    cursor: pointer;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    text-decoration: none;
    color: black;
    font-weight: 100;
    font-size: 18px;
    width: 130px;
    cursor: pointer;
    background-color: transparent; 
}
`;

export const CardTot = styled.div `

h4 {
    margin: 0px 0px 15px 0px;
    font-weight: bolder;
    font-size: 18px;
}

`;

export const ProjectIni = styled.div `
    margin: 3% 3% 1% 3%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    button {
    padding: 10px 5px;
    width: 15%;
    border-radius: 10px;
    border: 1px solid grey;
    cursor: pointer;
    margin-top: 25px;
    background-color: transparent;
    font-weight: 100;
    font-size: 18px;
    }

`;


export const ProjectDesc = styled.div ` 
    margin: 0% 0% 1% 2%;
    padding: 15px;

p{
    padding: 5px 0px;
}

button {
    padding: 10px 4px;
    width: 180px;
    border-radius: 10px;
    border: 1px solid grey;
    cursor: pointer;
    margin-top: 15px;
    background-color: transparent;
    font-weight: 100;
    font-size: 18px;
}

section {
    margin: 0% 10%;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
}

`;



export const FormService = styled.form `

margin: 1% 3%;

Input {
    margin: 10px 10px;
}

Select {
    margin: 10px 0px;
}

Button {
    margin: 10px 0px;
}

span {
    button {
    padding: 10px 4px;
    width: 180px;
    border-radius: 10px;
    border: 1px solid grey;
    cursor: pointer;
    margin-top: 15px;
    background-color: transparent;
    font-weight: 100;
    font-size: 18px;
}
}
`;

export const ServiceeCard = styled.div `
    background-color: white; 
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid none;
    box-shadow: 0 2px 5px gray;
    width: 25%;
    height: 30vh;
    padding: 2%;
    margin: 1% 1% 1% 1%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h4 {
    margin: 0px 0px 15px 0px;
    }
`;

export const Linha = styled.div `

    border: 0.1px solid rgba(222,224,224,1);
    margin: 1% 60% 1% 3%;

`;

export const LinhaDiv = styled.div `

    border: 0.1px solid rgba(222,224,224,1);
    margin: 3% 60% 1% 0%;

`;

export const ButProj = styled.button `
background-color: green;
`;

export const MsgStyle = styled.div `
    display: flex;
    align-items: center;
    margin: 2% 20%;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 10px; 
    font-weight: 100;
    font-size: 18px;
    justify-content: center;
`;


export const LoadingIcon = styled.div `
    img{
        width: 300px;
        display: flex;
        justify-content: center;
    }
`;