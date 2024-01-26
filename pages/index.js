// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
// import { getMembers } from '../api/teamData';
// import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';
// import TeamCard from '../components/MemberCards';

// function Home() {
//   const [members, setMembers] = useState([]);
//   const { user } = useAuth();
//   const getAllMembers = () => {
//     getMembers(user.uid).then(setMembers);
//   };

//   useEffect(() => {
//     getAllMembers();
//   }, []);

//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <h1>Hello {user.displayName}! </h1>
//       <p>Click the button below to logout!</p>
//       <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
//         Sign Out
//       </Button>
//     </div>
//   );
// }

// export default Home;
