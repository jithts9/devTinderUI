import  { useState } from 'react';

   const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const handleSubmit = (e) => {
       e.preventDefault();
       // Handle login logic here
       console.log('Logging in with:', { email, password });
     };

     return (
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
     );
   };

   export default Login;
