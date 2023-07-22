import React, {useState} from 'react';
import noodle from '../img/noodle.png';
import './Review.css'

function Review(){

    const [text, setText] = useState();   // 사용자의 입력 값을 배열로 관리
    const [list, setList] = useState([]);   // 등록된 항목을 배열로 관리


    const handleSubmit = (event) =>{
        event.preventDefault();     // 폼의 기본 제출 동작 막기 (제출시 화면이 재로딩 되면서 사리짐)
    }
    const handleChange = (e) => {   // 사용자의 입력값이 변경될 때 호출
        setText(e.target.value);
    }

    const handleAdd = () => {
        if(text.trim() !== ''){
            //공백이 아닌 경우에만 등록
            setList([...list, text]);   // 새로운 항목을 배열에 추가하여 상태 업데이트
            setText('');        // 입력창 초기화
        }
    }

    return(
        <div className='review'>
            <div className='menu-info'>
                <img className='noodle' src={noodle} alt='면 요리'></img>
                <span className='food-name'>신라면</span>
                <button>메뉴 목록으로 돌아가기</button>
            </div>

            <div className='write-review'>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={text} onChange={handleChange}></input>
                    <button className='submit' onClick={handleAdd}>등록</button>
                </form>
            </div>
            
            <ul>
                {list.map((review, index) => {
                    return <li key={index}>{review}</li>
                })}
            </ul>

        </div>
    );
}

export default Review;