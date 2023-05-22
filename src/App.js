import logo from './logo.svg';
import './App.css';

function App() {

  let students = [
    {name : '사람', age : 20, gender : 'woman'} ,
    {name : '휴먼', age : 25, gender : 'man'}, 
    {name : '피플', age : 35, gender : 'man'} 
  ]

  /* Map 함수
   - 주어진 함수를 호출한 결과를 모아 새로운 함수를 만든다
   ex) students라는 배열의 이름만 뽑아서 새로운 함수를 만들고싶어!
   - 기존 배열은 영향을 받지 않는다
   - key 값을 꼭 작성해야한다.
     이 때, key값은 서로 중복되면 안된다 고유한 값!
   */

  let newStudents = students.map(item => <p>{item.name}</p>)
  let newAge = students.map(item =><p>{item.age}</p>)
  
    // ======================== Filter ==================
    let womanList = students.filter(item => item.gender == 'woman')
    console.log('woman List : ', womanList);

    return (
    
    <div> 

      <h2>Map함수 </h2> 

      {students.map(item => <p key={item.name}>안녕하세요 저는 {item.name}입니다. 제 나이는 {item.age}입니다</p>)}
     
     <h2>Filter함수</h2>
     {/* filter함수는 배열의 각 요소에 대해서 주어진 함수의 결과값이 true인
      요소들만 모아서 새로운 배열로 반환하는 함수를 의미한다. 
    */}

    {womanList.map(item => <p key={item.name}>{item.name}이구요, {item.age}살입니다.</p>)}
    </div>
  );
}

export default App;
