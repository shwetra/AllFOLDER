// import { useState, useEffect } from "react";
// import { Box, IconButton, Menu, MenuItem, Tooltip, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// export default function Navbar({props}) {
//   const data=props
//   console.log(data)
//   const [isAuth, setIsAuth] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(true);
//   const [anchorElUser, setAnchorElUser] = useState(null);

 
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleSignout = () => {
//     setIsAuth(false);
//     setIsAdmin(false);
//     handleCloseUserMenu();
//   };
//   return (
//     <Box>
//     {isAuth ? (
//       <Box flexGrow={0} mr="5px" display={{ lg: "flex" }}>
//         <Tooltip title="Open settings">
//           <IconButton onClick={handleOpenUserMenu} padding="0px 8px">
//             <img src="https://img.icons8.com/clouds/100/null/user.png" alt="" width="60px" height="60px" />
//           </IconButton>
//         </Tooltip>
  
//         <Menu
//           mt="50px"
//           mr="0px"
//           id="menu-appbar"
//           anchorEl={anchorElUser}
//           anchorOrigin={{ vertical: "top", horizontal: "right" }}
//           keepMounted
//           transformOrigin={{ vertical: "top", horizontal: "right" }}
//           isOpen={Boolean(anchorElUser)}
//           onClose={handleCloseUserMenu}
//         >
//           {isAdmin && (
//             <Link to="/admin/dashboard">
//               <MenuItem onClick={handleCloseUserMenu}>
//                 <Text textAlign="center">Dashboard</Text>
//               </MenuItem>
//             </Link>
//           )}
//           <MenuItem onClick={handleSignout}>
//             <Text textAlign="center">Logout</Text>
//           </MenuItem>
//         </Menu>
//       </Box>
//     ) : (
//       <Box mt="4px">
//         <Login setIsAuth={setIsAuth} />
//       </Box>
//     )}
//   </Box>
  
//   );
  
// }
