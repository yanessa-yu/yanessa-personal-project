"use client"
import { useState, useEffect } from "react";
export default function ClientPage() {

 const [count, setCount] = useState(0)

 const handleClick = () => {
    setCount(count + 1)
 }
 useEffect(() => {
  console.log(count)
 }, [count]) // usēffect 的第2个参数是一个数组 当数组中的值发生变化时 才会执行useEffect
 // 当数组为空时 表示副作用只在组件挂载时执行一次

  return (
    <main>
      <div>
        <div>
            <button onClick={handleClick}>哈哈哈哈{ count }</button>
        </div>
      </div>
    </main>
  );
}