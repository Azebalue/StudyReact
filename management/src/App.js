import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'; //손님 컴포넌트 수입

const customers = [
  
  {
  'id': 1,
  'image': 'https://picsum.photos/200/200?random=1',
  'name' : '홍길동',
  'birthday': '2003.02.03',
  'gender': '남성',
  },

  {
    'id': 2,
    'image': 'https://picsum.photos/200/200?random=1',
    'name' : '이미나',
    'birthday': '1999.02.03',
    'gender': '여성',
  },
]

function App() {
  return (
    <div>
      {
        customers.map (c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              gender={c.gender}
              birthday={c.birthday}
            />
          );
        })
      }
    </div>

  );
}

export default App;
