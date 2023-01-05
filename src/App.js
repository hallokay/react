
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';


function App() {
 
  return(
    <Router>
      <Routes>
        <Route path="/" element={
          <Home />
        }/> 
        <Route path="/detail/:id" element={
          <Detail />
        } />
 
      </Routes>
  
    </Router>
  )



  // //코인트래커
  // const [loading, setLoading] = useState(true);
  // const [coinArr, setCoinArr] = useState([])
  // useEffect(() => {
  //   const url = "https://api.coinpaprika.com/v1/tickers";
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => {
  //     //얻은 데이터를 코인배열에 넣어준다.
  //     setCoinArr(data);
  //     //코인을 얻었으면 로딩상태 변경
  //     setLoading(false);

  //   })
  // }, [])

  // return (
  //   <div>
  //     <h1>THE COINTRACKER {loading ? '' : `(${coinArr.length})`}</h1>
  //     {/** 로딩 **/}
  //     {loading ? (<strong>Loading....</strong>) : (
  //       <ul>
  //       {
  //         coinArr.map(item => (
  //           <li key={item.id}>{item.name} ({item.symbol})</li>
  
  //         ))
  //       }
  //       </ul>
  //     )}

  //   </div>
  // )

  //투두리스트 만들기
  // const [todo, setTodo] = useState('');
  // const [todoArr, setTodoArr] = useState([]);
  // const onChange = e => setTodo(e.target.value);
  // const onSubmit = e => {
  //   e.preventDefault();
  //   //만약에 todo가 비어있으면 함수나가기(리턴)
  //   if( todo === '') return;

  //   //할일 Arr에 내가 지금 적은 것을 넣어주는거
  //   setTodoArr(currArr => [todo, ...currArr])
  //   setTodo(''); 
  // }
  

  // return (
  //   <div className="todo">
  //     <h1>my todos ({todoArr.length})</h1>
  //     <form onSubmit={onSubmit}>
  //       <input type="text" value={todo} onChange={onChange} placeholder="todo"/>
  //       <button>ADD TODO</button>
  //     </form>
  //     <hr/>
  //     <ul>
  //       {todoArr.map((item, index)=> (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
    
  //   </div>
 
    
  // );


}

export default App;
