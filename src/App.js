import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  text-align: center;
`;

const Movie = styled.div`
  margin: 0 auto;
  width: 70%;
  border: 1px solid #333;
  padding: 10px 0 30px 0;
  border-radius: 5px;
  margin-bottom : 50px;
`;

const Form = styled.div`
  width: 80%;
  margin: 0 auto;
`;

// 제목 부분 css
const Title = styled.input`
  width: 60%;
  height: 40px;
  margin-bottom: 20px;
  text-indent: 10px;
  font-size: 16px;
`;

// 내용 부분 css
const Textarea = styled.textarea`
  width: 70%;
  min-height: 400px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  resize: none;
`;

// 제출 버튼 css
const Submit = styled.button`
  width: 200px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  border: none;
  background-color: #00cec9;
  border-radius: 10px;

  :not(:last-child){
    margin-right: 40px;
  }
`;

function App() {
  // state에 저장
  const [boardContent, setBoardContent] = useState({
    title: '',
    content: ''
  })

  // 적힌 내용들을 저장 (title + content)
  const [viewContent, setViewContent] = useState([]);

  // state 업데이트
  const getValue = e => {
    // name : title → input태그의 name임, value : 제목 내용
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value
    });
    console.log(boardContent);
  };

  const getValue2 = e => {
    // name : content → textarea태그의 name임, value : textarea 내용
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value
    });
    console.log(boardContent);
  };

  return (
    <Main>
      <h1>게시판이다</h1>
      <Movie>
        {viewContent.map(element =>
          <div>
            <h2>{element.title}</h2>
            <div>{element.content}</div>
          </div>
        )}
      </Movie>
      <Form>
        <Title type='text' placeholder='제목' onChange={getValue} name='title' />
        <Textarea placeholder='내용' onChange={getValue} name='content'></Textarea>
      </Form>
      <Submit onClick={() => {
        setViewContent(viewContent.concat({ ...boardContent }));
      }
      }>등록</Submit>
      {/* <Submit onClick={() => {
        viewContent.pop({ ...boardContent });
      }}>삭제</Submit> */}
    </Main>
  );
}

export default App;