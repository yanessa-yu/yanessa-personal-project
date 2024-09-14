// import { GetServerSideProps } from 'next'

// type TestProps = {
//   initialCount: number
// }
// const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // 从服务器获取数据的逻辑
//   const initialCount = 13
//   return {
//     props: {
//       initialCount,
//     }
//   }
// }
export default function ServerPage() {
 
 const count = 0
 console.log(11, count)
  // const [count, setCount] = useState(initialCount)

  const handleClick = () => {
   // setCount(count + 1)
   console.log(count)
  }
  return (
    <main>
      <div>
        <div>
            <button>哈哈哈哈{ count }</button>
        </div>
      </div>
    </main>
  );
}