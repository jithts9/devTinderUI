import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
     const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
  
       const handleSubmit = (e) => {
         e.preventDefault();
         // Handle login logic here
         console.log('Logging in with:', { email, password });
       };

  return (
    <>
    <div>
      {/* <h1 className='text-3xl font-bold underline'>DevTinder</h1> */}
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-96">
           <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label className="block text-sm font-medium mb-2" htmlFor="email">
                 Email
               </label>
               <input
                 type="email"
                 id="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 className="border border-gray-300 p-2 rounded w-full"
               />
             </div>
             <div className="mb-6">
               <label className="block text-sm font-medium mb-2" htmlFor="password">
                 Password
               </label>
               <input
                 type="password"
                 id="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 className="border border-gray-300 p-2 rounded w-full"
               />
             </div>
             <button
               type="submit"
               className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
             >
               Login
             </button>
           </form>
         </div>
       </div>
     
    </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
